import { create } from 'zustand'

export interface IAnimationState {
    completed?: boolean
    toggleCompleted?: (bol: boolean) => void
}

export const useAnimationStore = create((set) => ({
    completed: true,
    toggleCompleted: (bol:boolean) => set((state: IAnimationState) => ({completed: bol})),
}))