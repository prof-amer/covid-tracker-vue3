import { defineStore } from 'pinia'

// 'data' in the first argument as defined by Pinia docs:
// the first argument is a unique id of the store across your application
// probably a good idea not to overlap the names (at least between the stores)

// you can also define the id as such
// export const useDataStore = defineStore({
//     id: 'data'
// })

// interestingly, the following way to declare the state is the Options API. https://pinia.vuejs.org/core-concepts/state.html#accessing-the-state
// It is different with Composition API.
// Using Options API for now because we don't need to include the return statement.
// This is probaly the only place where I use Options instead of Composition.
// It is however advisable not to mix the Options and Compositions API.

interface CovidData {
    ID: string,
    Country: string,
    CountryCode: string,
    Slug: string,
    NewConfirmed: number,
    TotalConfirmed: number,
    NewDeaths: number,
    TotalDeaths: number,
    NewRecovered: number,
    TotalRecovered: number,
    Date: string,
    Premium: object
}

let stats: CovidData

export const useDataStore = defineStore('data', {
    state: () => (
        {
            loading: true,
            title: 'Global',
            dataDate: '',
            stats,
            countries: [],
            selectedCountry: ''
        }
    ),

})