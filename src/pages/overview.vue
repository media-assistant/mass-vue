<template>
    <Nav variant="center">
        <NavButton
            exact
            to="/overview"
            variant="transparent"
        >
            Overview
        </NavButton>
        <NavButton
            to="/overview/movies"
            variant="transparent"
        >
            Movies
        </NavButton>
        <NavButton
            to="/overview/shows"
            variant="transparent"
        >
            Shows
        </NavButton>
    </Nav>
    <router-view />
</template>

<script setup lang="ts">
import Nav from '../components/Nav.vue';
import NavButton from '../components/NavButton.vue';
</script>