<script setup lang="ts">
import { onMounted } from 'vue';
import { router } from '../main';

onMounted(() => {
    void router.replace('/overview');
});

</script>