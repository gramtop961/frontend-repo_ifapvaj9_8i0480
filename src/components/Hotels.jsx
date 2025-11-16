import React, { useMemo, useState } from 'react'
import { useI18n } from './LanguageProvider'

const DATA = [
  { name: 'Azalai Hôtel', city: 'Cotonou', price: 120, rating: 4.5, img: 'https://images.unsplash.com/photo-1559599101-f09722fb4948?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Résidence Abomey', city: 'Abomey', price: 70, rating: 4.1, img: 'https://images.unsplash.com/photo-1560448075-bb4caa6c0f11?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Porto Guesthouse', city: 'Porto-Novo', price: 55, rating: 4.0, img: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?q=80&w=1600&auto=format&fit=crop' },
  { name: 'Pendjari Lodge', city: 'Natitingou', price: 90, rating: 4.3, img: 'https://images.unsplash.com/photo-1541123356219-284ebe98ae3e?q=80&w=1600&auto=format&fit=crop' },
]

export default function Hotels() {
  const { t } = useI18n()
  const [query, setQuery] = useState('')
  const [city, setCity] = useState('')
  const [price, setPrice] = useState(200)

  const cities = ['Cotonou','Ouidah','Porto-Novo','Natitingou','Abomey','Parakou']

  const results = useMemo(() => {
    return DATA.filter(h => (
      (!city || h.city === city) &&
      (h.price <= price) &&
      (!query || h.name.toLowerCase().includes(query.toLowerCase()))
    ))
  }, [query, city, price])

  return (
    <section id="hotels" className="py-16 bg-gradient-to-b from-emerald-50/40 to-amber-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-end justify-between gap-4 flex-wrap">
          <div>
            <h2 className="text-3xl font-bold text-amber-900">{t('hotels.title')}</h2>
            <p className="text-amber-900/70">{t('hotels.popular')}</p>
          </div>
          <div className="flex flex-wrap gap-3 bg-white p-3 rounded-xl shadow border border-amber-100">
            <input value={query} onChange={(e)=>setQuery(e.target.value)} placeholder={t('hotels.search')} className="px-3 py-2 rounded-md border outline-none focus:ring-2 ring-amber-400" />
            <select value={city} onChange={(e)=>setCity(e.target.value)} className="px-3 py-2 rounded-md border">
              <option value="">{t('hotels.city')}</option>
              {cities.map(c => <option key={c} value={c}>{c}</option>)}
            </select>
            <div className="flex items-center gap-2">
              <label className="text-sm text-amber-900/80">{t('hotels.price')}</label>
              <input type="range" min={20} max={200} value={price} onChange={(e)=>setPrice(Number(e.target.value))} />
              <span className="text-sm font-medium">${price}</span>
            </div>
          </div>
        </div>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((h, i) => (
            <div key={i} className="group rounded-2xl overflow-hidden bg-white shadow hover:shadow-xl transition border border-amber-100">
              <div className="h-44 overflow-hidden">
                <img src={h.img} alt={h.name} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold text-amber-900">{h.name}</h3>
                  <span className="text-amber-800 font-medium">${h.price}/night</span>
                </div>
                <p className="text-amber-900/70 text-sm">{h.city} • ★ {h.rating}</p>
                <button className="mt-3 inline-block text-sm font-medium text-amber-800 hover:text-amber-900">
                  {t('hotels.book')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
