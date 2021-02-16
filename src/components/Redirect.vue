<script setup lang="ts">
import { defineProps, onMounted } from 'vue';
import router from '../plugins/router';

const { replace, to } = defineProps({
    replace: {
        default: true,
        type: Boolean,
    },
    to: {
        type: String,
        required: true
    }
});

onMounted(() => {
    if (replace) void router.replace(to);
    void router.push(to);
});
</script>