import React, { useState } from 'react'
import { useI18n } from './LanguageProvider'
import { Plane, Users, CalendarRange } from 'lucide-react'

export default function Flights() {
  const { t } = useI18n()
  const [form, setForm] = useState({ from: '', to: 'Cotonou (COO)', dates: '', pax: 1 })

  return (
    <section id="flights" className="relative py-16 bg-gradient-to-b from-amber-50/40 to-sky-50/40">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />
      <div className="relative max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-sky-900 mb-6 flex items-center gap-3"><Plane className="text-sky-600"/> {t('flights.title')}</h2>
        <p className="text-sky-900/70 mb-6">{t('flights.note')}</p>
        <div className="bg-white/80 backdrop-blur rounded-2xl shadow border p-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <input placeholder={t('flights.from')} value={form.from} onChange={e=>setForm({...form, from:e.target.value})} className="px-4 py-3 rounded-lg border"/>
          <input placeholder={t('flights.to')} value={form.to} onChange={e=>setForm({...form, to:e.target.value})} className="px-4 py-3 rounded-lg border"/>
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg border">
            <CalendarRange className="text-sky-600"/>
            <input type="text" placeholder={t('flights.dates')} value={form.dates} onChange={e=>setForm({...form, dates:e.target.value})} className="flex-1 outline-none"/>
          </div>
          <div className="flex items-center gap-2 px-4 py-3 rounded-lg border">
            <Users className="text-sky-600"/>
            <input type="number" min={1} value={form.pax} onChange={e=>setForm({...form, pax:Number(e.target.value)})} className="flex-1 outline-none"/>
          </div>
          <button className="sm:col-span-2 lg:col-span-4 mt-2 px-6 py-3 rounded-lg bg-gradient-to-r from-sky-400 to-emerald-500 text-white font-semibold hover:opacity-95">
            {t('flights.find')}
          </button>
        </div>
      </div>
    </section>
  )
}
