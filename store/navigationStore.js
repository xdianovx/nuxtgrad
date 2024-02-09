import { defineStore } from "pinia";

export const useNavStore = defineStore('NavStore', {
    state: () => ({
        isOpen: false
    }),
    actions: {
        setOpen() {
            this.isOpen = true
        },

        setClose() {
            this.isOpen = false
        }
    }

})