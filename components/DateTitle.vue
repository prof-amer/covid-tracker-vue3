<template>
    <div class="text-center">
        <h2 class="text-3xl font-bold ">
            {{ dataStore.title }}
        </h2>
        <div class="text-2xl mt-4 mb-10">
            <span>Last Updated:<br>
            </span>{{ parsedDate }}
        </div>
    </div>
</template>

<script setup lang="ts">

import { useDataStore } from '@/stores/data'
import { computed } from 'vue'
import { format, parseISO } from 'date-fns'

const dataStore = useDataStore()

const parsedDate = computed(() => {
    return format(parseISO(dataStore.dataDate), 'MMMM do yyyy, h:mm:ss a')
}
)

</script>