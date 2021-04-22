<template>
    <h1 class="mt-12">
        {{ title }}
    </h1>
    <p v-if="loading">
        Loading...
    </p>
    <p>
        <table class="table-auto w-full p-10">
            <thead>
                <th
                    v-for="header in headers"
                    :key="header.value"
                >
                    {{ header.text }}
                </th>
                <th />
            </thead>
            <tbody>
                <tr
                    v-for="(item, index) in items"
                    :key="index"
                >
                    <td
                        v-for="(header, header_index) in headers"
                        :key="`${header.value}_${header_index}`"
                    >
                        {{ item[header.value] }}
                    </td>
                    <td>
                        <button @click="$emit('delete', item)">
                            Delete
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </p>
</template>

<script setup lang="ts">
import { defineEmit, defineProps } from '@vue/runtime-core';
import type { PropType } from '@vue/runtime-core';
import type { TableHeader } from '../types/components';

defineProps({
    title: {
        type: String,
        default: '',
    },
    loading: {
        type: Boolean,
        default: false,
    },
    items: {
        type: Array as PropType<any[]>,
        default: () => [],
    },
    headers: {
        type: Array as PropType<TableHeader[]>,
        default: () => [],
    }
});

defineEmit(['delete']);
</script>