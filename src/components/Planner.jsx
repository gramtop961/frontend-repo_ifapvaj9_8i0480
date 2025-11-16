import React, { useMemo, useState } from 'react'
import { useI18n } from './LanguageProvider'
import { Check, ChevronLeft, ChevronRight, Bot } from 'lucide-react'

export default function Planner() {
  const { t } = useI18n()
  const steps = t('planner.steps')
  const [i, setI] = useState(0)

  const percent = useMemo(() => ((i+1)/steps.length)*100, [i, steps])

  return (
    <section id="plan" className="py-16 bg-gradient-to-b from-yellow-50/40 to-emerald-50/40">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-3xl font-bold text-emerald-900">{t('planner.title')}</h2>
          <div className="flex items-center gap-2 text-emerald-900/80"><Bot size={18}/> {t('planner.helper')}</div>
        </div>

        <div className="w-full h-3 rounded-full bg-emerald-100 overflow-hidden">
          <div className="h-full bg-gradient-to-r from-yellow-400 to-emerald-500" style={{ width: `${percent}%` }} />
        </div>

        <div className="mt-6 bg-white rounded-2xl border shadow p-6 grid sm:grid-cols-3 gap-6">
          {steps.map((s, idx) => (
            <div key={idx} className={`p-4 rounded-xl border ${idx<=i? 'bg-emerald-50 border-emerald-200':'bg-gray-50 border-gray-200'}`}>
              <div className="flex items-center gap-2 font-medium"><span className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${idx<i? 'bg-emerald-500 text-white':'bg-white border'}`}>{idx<i? <Check size={12}/> : idx+1}</span> {s}</div>
              <p className="text-sm text-gray-600 mt-2">{idx===0 && 'Sélectionnez vos dates selon la saison sèche pour des conditions optimales.'}{idx===1 && 'Nous vous proposerons des vols directs ou avec escale vers Cotonou.'}{idx===2 && 'Choisissez un hébergement adapté à votre budget et à votre itinéraire.'}{idx===3 && 'Ajoutez des activités culturelles et nature à votre programme.'}</p>
            </div>
          ))}
        </div>

        <div className="mt-6 flex justify-between">
          <button disabled={i===0} onClick={()=>setI(i-1)} className="px-4 py-2 rounded-full border bg-white disabled:opacity-50 flex items-center gap-2"><ChevronLeft size={18}/> {t('planner.back')}</button>
          {i < steps.length-1 ? (
            <button onClick={()=>setI(i+1)} className="px-6 py-2 rounded-full bg-gradient-to-r from-rose-400 to-emerald-500 text-white font-semibold flex items-center gap-2">{t('planner.next')} <ChevronRight size={18}/></button>
          ) : (
            <button className="px-6 py-2 rounded-full bg-emerald-600 text-white font-semibold">{t('planner.done')}</button>
          )}
        </div>
      </div>
    </section>
  )
}
