import React, { useMemo, useState } from 'react'
import { useI18n } from './LanguageProvider'

const SAMPLE = [
  { city: 'Cotonou', name: 'Pirogue à Ganvié', desc: 'Excursion en pirogue au village lacustre de Ganvié.', img: 'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1600&auto=format&fit=crop' },
  { city: 'Ouidah', name: 'Route des Esclaves', desc: 'Parcours historique et mémoriel jusqu’à la Porte du Non-Retour.', img: 'https://images.unsplash.com/photo-1549888834-3ec93abae044?q=80&w=1600&auto=format&fit=crop' },
  { city: 'Natitingou', name: 'Safari Pendjari', desc: 'Observation des éléphants, lions et paysages grandioses.', img: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?q=80&w=1600&auto=format&fit=crop' },
  { city: 'Abomey', name: 'Palais Royaux', desc: 'Vestiges royaux classés à l’UNESCO, art et histoire.', img: 'https://images.unsplash.com/photo-1520697222862-156ae0c1a73f?q=80&w=1600&auto=format&fit=crop' },
  { city: 'Parakou', name: 'Marchés Colorés', desc: 'Immersion dans l’artisanat et les épices locales.', img: 'https://images.unsplash.com/photo-1469536526925-9b5547cd5d68?q=80&w=1600&auto=format&fit=crop' },
  { city: 'Porto-Novo', name: 'Musées & Culture', desc: 'Architecture, musées et traditions afro-brésiliennes.', img: 'https://images.unsplash.com/photo-1529686342252-cd6f1f0c1b48?q=80&w=1600&auto=format&fit=crop' },
]

export default function Activities() {
  const { t } = useI18n()
  const [city, setCity] = useState('Cotonou')
  const cities = t('activities.cities')

  const filtered = useMemo(() => SAMPLE.filter(a => !city || a.city === city), [city])

  return (
    <section id="activities" className="relative py-16 bg-gradient-to-b from-white to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <h2 className="text-3xl font-bold text-emerald-900">{t('activities.title')}</h2>
            <p className="text-emerald-800/80">{t('activities.filterLabel')}</p>
          </div>

          <div className="flex gap-2 flex-wrap">
            {cities.map((c) => (
              <button key={c} onClick={() => setCity(c)} className={`px-3 py-1 rounded-full border transition ${city===c? 'bg-emerald-600 text-white border-emerald-600':'bg-white text-emerald-700 border-emerald-300 hover:bg-emerald-50'}`}>
                {c}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((a, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition border border-emerald-100">
              <div className="h-44 overflow-hidden">
                <img src={a.img} alt={a.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-emerald-900">{a.name}</h3>
                <p className="text-emerald-800/80 text-sm mt-1">{a.desc}</p>
                <button className="mt-3 inline-block text-sm font-medium text-emerald-700 hover:text-emerald-900">
                  {t('activities.more')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
