<template>
    <table class="table-auto w-full p-10">
        <thead v-if="headers">
            <th
                v-for="(header, index) in headers"
                :key="index"
            >
                {{ header }}
            </th>
        </thead>
        <tbody>
            <slot name="tbody" />
        </tbody>
    </table>
</template>

<style lang="postcss" scoped>
    tr:not(:last-child) {
        @apply border-b border-gray-200;
    }

    td {
        @apply p-2;
    }
</style>

<script lang="ts" setup>
import { defineProps } from 'vue';
import type { PropType } from 'vue';
import type { TableHeader } from '../types/components';

defineProps({
    headers: [Array] as PropType<TableHeader[]>,
});

</script>

