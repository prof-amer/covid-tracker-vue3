<template>
    <div class="grid md:grid-cols-2 gap-4">
        <!-- Box 1 -->
        <div class="shadow-md bg-blue-100 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">
                Cases
            </h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">New:</span>
                {{ addCommas(dataStore.stats.NewConfirmed) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ addCommas(dataStore.stats.TotalConfirmed) }}
            </div>
        </div>

        <!-- Box 2 -->
        <div class="shadow-md bg-blue-200 p-10 text-center rounded">
            <h3 class="text-3xl text-blue-900 font-bold mb-4">
                Deaths
            </h3>

            <div class="text-2xl mb-4">
                <span class="font-bold">New:</span>
                {{ addCommas(dataStore.stats.NewDeaths) }}
            </div>
            <div class="text-2xl mb-4">
                <span class="font-bold">Total:</span>
                {{ addCommas(dataStore.stats.TotalDeaths) }}
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

import { useDataStore } from '@/stores/data';

const dataStore = useDataStore()

function addCommas(value) {
    return value.toLocaleString()
}

</script>