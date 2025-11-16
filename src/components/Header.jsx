import React from 'react'
import { useI18n } from './LanguageProvider'
import { Menu, Languages } from 'lucide-react'

export default function Header({ onPlan }) {
  const { t, lang, setLang } = useI18n()

  const NavLink = ({ label }) => (
    <a href="#" className="px-3 py-2 text-sm font-medium text-white/90 hover:text-white transition">{label}</a>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur bg-black/30 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-yellow-400 via-rose-500 to-emerald-600 ring-2 ring-white/30 shadow-lg" aria-label="Logo" />
            <span className="text-white font-semibold tracking-wide">Découvrir le Bénin</span>
          </div>

          <nav className="hidden md:flex items-center">
            <NavLink label={t('nav.home')} />
            <NavLink label={t('nav.activities')} />
            <NavLink label={t('nav.hotels')} />
            <NavLink label={t('nav.flights')} />
            <NavLink label={t('nav.transport')} />
            <NavLink label={t('nav.restaurants')} />
            <NavLink label={t('nav.plan')} />
            <NavLink label={t('nav.contact')} />
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden sm:flex items-center gap-1 bg-white/10 text-white rounded-full p-1">
              {['fr','en','es'].map(code => (
                <button key={code} onClick={() => setLang(code)} className={`px-2 py-1 text-xs rounded-full transition ${lang===code? 'bg-white text-black':'text-white/80 hover:bg-white/20'}`}>
                  {code.toUpperCase()}
                </button>
              ))}
            </div>
            <button onClick={onPlan} className="ml-2 bg-gradient-to-r from-yellow-400 to-rose-500 text-black font-semibold px-4 py-2 rounded-full shadow hover:opacity-90 transition">
              {t('nav.cta')}
            </button>
            <button className="md:hidden ml-2 p-2 rounded hover:bg-white/10 text-white">
              <Menu size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
