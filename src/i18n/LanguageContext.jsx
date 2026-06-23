import { createContext, useContext, useState } from 'react'
import { translations } from './translations'

const LangCtx = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('uz')
  const t = (key) => translations[lang]?.[key] ?? translations['uz'][key] ?? key
  return (
    <LangCtx.Provider value={{ lang, setLang, t }}>
      {children}
    </LangCtx.Provider>
  )
}

export const useLang = () => useContext(LangCtx)
