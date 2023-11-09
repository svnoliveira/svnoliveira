import { create } from 'zustand'


export interface ILanguageState {
    language?: string
    toggleLanguage: (str: string) => void
}

export const useLanguageStore = create<ILanguageState>((set) => ({
    language: 'EN',
    toggleLanguage: (str) => set((state) => ({language: str})),
}))
