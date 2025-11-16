import React from 'react'
import { useI18n } from './LanguageProvider'

export default function Restaurants() {
  const { t } = useI18n()
  const items = t('restaurants.items')

  return (
    <section id="restaurants" className="py-16 bg-gradient-to-b from-rose-50/40 to-yellow-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-rose-900 mb-8">{t('restaurants.title')}</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((it, i) => (
            <div key={i} className="rounded-2xl overflow-hidden bg-white border shadow hover:shadow-xl transition">
              <div className="h-36 overflow-hidden">
                <img src={`https://source.unsplash.com/featured/400x300/?food,africa,${encodeURIComponent(it.name)}`} alt={it.name} className="w-full h-full object-cover hover:scale-105 transition duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-rose-900">{it.name}</h3>
                <p className="text-rose-900/70 text-sm mt-1">{it.desc}</p>
                <p className="text-xs text-rose-800/70 mt-2">{it.city}</p>
                <button className="mt-3 inline-block text-sm font-medium text-rose-800 hover:text-rose-900">
                  {t('restaurants.discover')}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
