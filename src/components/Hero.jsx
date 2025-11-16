import React from 'react'
import { useI18n } from './LanguageProvider'
import Spline from '@splinetool/react-spline'

export default function Hero({ onExplore, onPlan }) {
  const { t } = useI18n()

  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/cEecEwR6Ehj4iT8T/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70 pointer-events-none" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 pt-28 pb-16 text-center text-white">
        <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow-lg leading-tight">
          {t('hero.title')}
        </h1>
        <p className="mt-4 text-white/90 text-lg sm:text-xl max-w-3xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
          <button onClick={onExplore} className="px-6 py-3 rounded-full bg-white text-black font-semibold hover:scale-105 transition shadow-lg">
            {t('hero.explore')}
          </button>
          <button onClick={onPlan} className="px-6 py-3 rounded-full bg-gradient-to-r from-yellow-400 to-rose-500 text-black font-semibold hover:scale-105 transition shadow-lg">
            {t('hero.plan')}
          </button>
        </div>
      </div>
    </section>
  )
}
