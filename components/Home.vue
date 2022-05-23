<template>
    <div>
        <div v-if="!dataStore.loading">
            <DateTitle />
            <DataBoxes />
            <CountrySelect @get-country="getCountryData" />
            <button @click="clearCountryData" v-if="dataStore.title !== 'Global'"
                class="bg-green-700 text-white rounded p-3 mt-10 focus:outline-none hover:bg-green-600">
                Clear Country
            </button>
        </div>
        <div v-else>
            Loading
        </div>
    </div>
</template>

<script setup lang="ts">

// import { reactive } from 'vue'
import { useDataStore } from '@/stores/data'

// reactive are explicitly for objects. 
// const currentData = reactive(
//     {
//         loading: true,
//         title: 'Global',
//         dataDate: '',
//         stats: {},
//         countries: []
//     }
// )

// we can use the store we created to replace reactive
const dataStore = useDataStore();

// function replaces methods in Options API
async function fetchCovidData() {
    const res = await fetch('https://api.covid19api.com/summary');
    return res.json();
}

function getCountryData(country) {
    dataStore.stats = country
    dataStore.title = country.Country
}

async function clearCountryData() {
    const retrievedData = await fetchCovidData()
    dataStore.$patch({
        loading: false,
        dataDate: retrievedData.Date,
        stats: retrievedData.Global,
        countries: retrievedData.Countries,
        title: 'Global',
        selectedCountry: ''
    })
}

// to call a function, just call it normally without this. keyword.
// this is because setup is called early in creation of the Vue object, hence it will not contain the this. config object
// assign data
const retrievedData = await fetchCovidData()
dataStore.$patch({
    loading: false,
    dataDate: retrievedData.Date,
    stats: retrievedData.Global,
    countries: retrievedData.Countries
})
</script>