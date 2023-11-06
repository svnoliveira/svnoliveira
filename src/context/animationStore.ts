import { create } from 'zustand'


export const useAnimationStore = create((set) => ({
    completed: false,
    toggleCompleted: (bol:boolean) => set((state: {completed: boolean}) => ({completed: bol})),
}))