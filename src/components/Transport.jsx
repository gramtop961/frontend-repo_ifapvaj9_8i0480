import React from 'react'
import { useI18n } from './LanguageProvider'
import { Car, Bus, Bike, Taxi, SteeringWheel } from 'lucide-react'

const icons = [
  { label: 0, Icon: Taxi },
  { label: 1, Icon: Car },
  { label: 2, Icon: Bike },
  { label: 3, Icon: Bus },
  { label: 4, Icon: SteeringWheel },
]

export default function Transport() {
  const { t } = useI18n()
  const options = t('transport.options')

  return (
    <section id="transport" className="py-16 bg-gradient-to-b from-sky-50/40 to-rose-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-emerald-900 mb-8">{t('transport.title')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {options.map((opt, i) => {
            const Icon = icons[i]?.Icon || Car
            return (
              <div key={i} className="rounded-2xl bg-white border p-6 shadow hover:shadow-lg transition text-center">
                <Icon className="mx-auto text-emerald-600" size={32} />
                <p className="mt-2 font-medium text-emerald-900">{opt}</p>
              </div>
            )
          })}
        </div>
        <div className="text-center mt-8">
          <button className="px-6 py-3 rounded-full bg-gradient-to-r from-emerald-500 to-rose-500 text-white font-semibold hover:opacity-95">
            {t('transport.cta')}
          </button>
        </div>
      </div>
    </section>
  )
}
