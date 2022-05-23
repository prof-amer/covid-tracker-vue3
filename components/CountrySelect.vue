<template>
    <select @change="onSelectCountry" v-model="dataStore.selectedCountry"
        class="form-select mt-1 block w-full border p-3 rounded">
        <option value="">Select Country</option>
        <option v-for="country in dataStore.countries" :value="country.ID">
            {{ country.Country }}
        </option>
    </select>

</template>

<script setup lang="ts">

import { useDataStore } from '@/stores/data';
import { content } from '~~/tailwind.config';

const dataStore = useDataStore()
const emit = defineEmits(['get-country'])

function onSelectCountry() {
    const country = dataStore.countries.find((item) => item.ID === dataStore.selectedCountry)

    emit('get-country', country)
}

</script>