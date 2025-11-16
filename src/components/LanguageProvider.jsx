import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'

const LanguageContext = createContext({
  lang: 'fr',
  setLang: () => {},
  t: (key) => key,
})

const translations = {
  fr: {
    nav: {
      home: 'Accueil',
      activities: 'Activités',
      hotels: 'Hôtels',
      flights: 'Vols',
      transport: 'Transports',
      restaurants: 'Restaurants',
      plan: 'Organiser sa visite',
      contact: 'Contact',
      cta: 'Planifier mon voyage',
    },
    hero: {
      title: 'Découvrez la magie du Bénin',
      subtitle: "Explorez les trésors culturels, naturels et humains du cœur de l’Afrique de l’Ouest.",
      explore: 'Explorer les activités',
      plan: 'Planifier ma visite',
    },
    activities: {
      title: 'Activités par ville',
      filterLabel: 'Choisir une ville',
      more: 'En savoir plus',
      cities: ['Cotonou', 'Ouidah', 'Porto-Novo', 'Natitingou', 'Abomey', 'Parakou'],
    },
    hotels: {
      title: 'Hôtels',
      search: 'Rechercher un hôtel',
      city: 'Ville',
      price: 'Prix max',
      comfort: 'Confort',
      book: 'Réserver',
      popular: 'Populaires',
    },
    flights: {
      title: 'Trouver un vol pour le Bénin',
      from: 'Départ',
      to: 'Arrivée',
      dates: 'Dates',
      passengers: 'Passagers',
      find: 'Rechercher un vol',
      note: "Structure prête pour une intégration API future",
    },
    transport: {
      title: 'Se déplacer au Bénin',
      cta: 'Trouver un moyen de transport',
      options: ['Taxis', 'Voitures de location', 'Motos-taxis', 'Bus', 'Chauffeurs privés'],
    },
    restaurants: {
      title: 'Restaurants & saveurs',
      discover: 'Découvrir',
      items: [
        { name: 'Amiwo', city: 'Cotonou', desc: 'Pâte de maïs rouge servie avec une sauce riche et épicée.' },
        { name: 'Akassa', city: 'Porto-Novo', desc: 'Spécialité fermentée de maïs, onctueuse et savoureuse.' },
        { name: 'Wagassi', city: 'Natitingou', desc: 'Fromage frit du Nord, croustillant et fondant.' },
        { name: 'Yovo Doko', city: 'Cotonou', desc: 'Beignets sucrés dorés, incontournables des marchés.' },
      ],
    },
    planner: {
      title: 'Organiser sa visite',
      steps: ['Choisir ses dates', 'Réserver son vol', 'Choisir son hôtel', 'Sélectionner ses activités'],
      helper: 'Aide-moi à planifier mon voyage',
      start: 'Démarrer',
      next: 'Suivant',
      back: 'Retour',
      done: 'Terminer',
    },
    footer: {
      made: 'Made with ❤️ au Bénin',
      quick: 'Liens rapides',
      about: 'À propos',
      legal: 'Mentions légales',
      subscribe: 'S’inscrire à la newsletter',
      email: 'Votre email',
      send: 'S’inscrire',
    },
  },
  en: {
    nav: {
      home: 'Home', activities: 'Activities', hotels: 'Hotels', flights: 'Flights', transport: 'Transport', restaurants: 'Restaurants', plan: 'Plan your trip', contact: 'Contact', cta: 'Plan my trip'
    },
    hero: { title: 'Discover the magic of Benin', subtitle: 'Explore the cultural, natural and human treasures of West Africa’s heart.', explore: 'Explore activities', plan: 'Plan my visit' },
    activities: { title: 'Activities by city', filterLabel: 'Choose a city', more: 'Learn more', cities: ['Cotonou', 'Ouidah', 'Porto-Novo', 'Natitingou', 'Abomey', 'Parakou'] },
    hotels: { title: 'Hotels', search: 'Search a hotel', city: 'City', price: 'Max price', comfort: 'Comfort', book: 'Book', popular: 'Popular' },
    flights: { title: 'Find a flight to Benin', from: 'From', to: 'To', dates: 'Dates', passengers: 'Passengers', find: 'Search flight', note: 'Structure ready for future API integration' },
    transport: { title: 'Getting around in Benin', cta: 'Find transport', options: ['Taxis', 'Rental cars', 'Motorbike taxis', 'Buses', 'Private drivers'] },
    restaurants: { title: 'Restaurants & flavors', discover: 'Discover', items: [
      { name: 'Amiwo', city: 'Cotonou', desc: 'Red corn meal served with a rich spicy sauce.' },
      { name: 'Akassa', city: 'Porto-Novo', desc: 'Fermented corn specialty, smooth and tasty.' },
      { name: 'Wagassi', city: 'Natitingou', desc: 'Northern fried cheese, crispy and melty.' },
      { name: 'Yovo Doko', city: 'Cotonou', desc: 'Golden sweet fritters, a market classic.' },
    ] },
    planner: { title: 'Plan your trip', steps: ['Choose your dates', 'Book your flight', 'Choose your hotel', 'Select your activities'], helper: 'Help me plan my trip', start: 'Start', next: 'Next', back: 'Back', done: 'Finish' },
    footer: { made: 'Made with ❤️ in Benin', quick: 'Quick links', about: 'About', legal: 'Legal', subscribe: 'Subscribe to newsletter', email: 'Your email', send: 'Subscribe' },
  },
  es: {
    nav: { home: 'Inicio', activities: 'Actividades', hotels: 'Hoteles', flights: 'Vuelos', transport: 'Transportes', restaurants: 'Restaurantes', plan: 'Planificar visita', contact: 'Contacto', cta: 'Planificar mi viaje' },
    hero: { title: 'Descubre la magia de Benín', subtitle: 'Explora los tesoros culturales, naturales y humanos del corazón de África Occidental.', explore: 'Explorar actividades', plan: 'Planificar mi visita' },
    activities: { title: 'Actividades por ciudad', filterLabel: 'Elegir una ciudad', more: 'Saber más', cities: ['Cotonou', 'Ouidah', 'Porto-Novo', 'Natitingou', 'Abomey', 'Parakou'] },
    hotels: { title: 'Hoteles', search: 'Buscar un hotel', city: 'Ciudad', price: 'Precio máx', comfort: 'Comodidad', book: 'Reservar', popular: 'Populares' },
    flights: { title: 'Encontrar un vuelo a Benín', from: 'Salida', to: 'Llegada', dates: 'Fechas', passengers: 'Pasajeros', find: 'Buscar vuelo', note: 'Estructura lista para futura API' },
    transport: { title: 'Moverse en Benín', cta: 'Encontrar transporte', options: ['Taxis', 'Coches de alquiler', 'Motos', 'Autobuses', 'Conductores privados'] },
    restaurants: { title: 'Restaurantes y sabores', discover: 'Descubrir', items: [
      { name: 'Amiwo', city: 'Cotonou', desc: 'Harina de maíz roja con salsa picante.' },
      { name: 'Akassa', city: 'Porto-Novo', desc: 'Especialidad de maíz fermentado, suave y sabrosa.' },
      { name: 'Wagassi', city: 'Natitingou', desc: 'Queso frito del norte, crujiente y fundente.' },
      { name: 'Yovo Doko', city: 'Cotonou', desc: 'Buñuelos dulces dorados, clásicos del mercado.' },
    ] },
    planner: { title: 'Organiza tu visita', steps: ['Elegir fechas', 'Reservar vuelo', 'Elegir hotel', 'Seleccionar actividades'], helper: 'Ayúdame a planificar mi viaje', start: 'Comenzar', next: 'Siguiente', back: 'Atrás', done: 'Finalizar' },
    footer: { made: 'Hecho con ❤️ en Benín', quick: 'Enlaces rápidos', about: 'Acerca de', legal: 'Aviso legal', subscribe: 'Suscribirse al boletín', email: 'Tu correo', send: 'Suscribirse' },
  }
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr')

  useEffect(() => {
    const saved = localStorage.getItem('lang')
    if (saved) setLang(saved)
  }, [])

  useEffect(() => {
    localStorage.setItem('lang', lang)
  }, [lang])

  const t = useMemo(() => {
    const dict = translations[lang] || translations.fr
    return (key) => key.split('.').reduce((acc, k) => (acc ? acc[k] : undefined), dict) ?? key
  }, [lang])

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useI18n() {
  return useContext(LanguageContext)
}
