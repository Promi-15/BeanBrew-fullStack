import { create } from 'zustand'

const useUpdateModalStore = create((set) => ({
    isUpdateModalOpen: false,
    updatingCoffee: null,


    openUpdateModal: () => set({ isUpdateModalOpen: true}),
    closeUpdateModal: () => set({ isUpdateModalOpen: false }),
    setUpdatingCoffee: (coffee) => set({updatingCoffee: coffee})
}))

export default useUpdateModalStore;