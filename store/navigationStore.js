import {defineStore} from "pinia";

export const useNavStore =  defineStore('NavStore', {
    state: () => ({
        isOpen: false
    })
})