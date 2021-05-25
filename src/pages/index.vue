<template>
    <Nav variant="center">
        <NavButton
            exact
            to="/"
            variant="transparent"
        >
            Overview
        </NavButton>
        <NavButton
            to="/movies"
            variant="transparent"
        >
            Movies
        </NavButton>
        <NavButton
            to="/shows"
            variant="transparent"
        >
            Shows
        </NavButton>
        <NavButton
            to="/torrents"
            variant="transparent"
        >
            torrents
        </NavButton>
    </Nav>
    <div class="mt-16">
        <router-view />
    </div>
</template>

<script setup lang="ts">
import Nav from '../components/Nav.vue';
import NavButton from '../components/NavButton.vue';
</script>