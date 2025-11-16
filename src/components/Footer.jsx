import React from 'react'
import { useI18n } from './LanguageProvider'
import { Facebook, Instagram, Twitter } from 'lucide-react'

export default function Footer() {
  const { t } = useI18n()

  return (
    <footer className="relative bg-black text-white pt-12 pb-8">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1760764541302-e3955fbc6b2b?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjMzMDU0MTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] opacity-10 bg-cover" />
      <div className="relative max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-yellow-400 via-rose-500 to-emerald-600 ring-2 ring-white/30 shadow-lg" aria-label="Logo" />
            <p className="mt-3 text-white/80 text-sm">{t('footer.made')}</p>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('footer.quick')}</h4>
            <ul className="space-y-1 text-white/80 text-sm">
              <li><a href="#">{t('nav.home')}</a></li>
              <li><a href="#">{t('nav.plan')}</a></li>
              <li><a href="#">{t('nav.contact')}</a></li>
              <li><a href="#">{t('footer.legal')}</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Social</h4>
            <div className="flex gap-3 text-white/80">
              <a href="#" className="hover:text-white"><Facebook/></a>
              <a href="#" className="hover:text-white"><Instagram/></a>
              <a href="#" className="hover:text-white"><Twitter/></a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-2">{t('footer.subscribe')}</h4>
            <div className="flex gap-2">
              <input placeholder={t('footer.email')} className="px-3 py-2 rounded-md border border-white/20 bg-white/10 text-white placeholder-white/60 focus:outline-none"/>
              <button className="px-4 py-2 rounded-md bg-white text-black font-semibold">{t('footer.send')}</button>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-white/60 text-sm">© {new Date().getFullYear()} Découvrir le Bénin</div>
      </div>
    </footer>
  )
}
