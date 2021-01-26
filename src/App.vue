<template>
    <global-nav>
        <router-link
            to="/"
        >
            Overview
        </router-link>
        <router-link
            to="/movies"
        >
            Movies
        </router-link>
        <router-link
            to="/shows"
        >
            Shows
        </router-link>
        <router-link
            to="/settings"
        >
            Settings
        </router-link>
    </global-nav>
    <router-view />
</template>

<script setup lang="ts">
import GlobalNav from './components/GlobalNav.vue';
</script>