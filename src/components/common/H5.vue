<template>
    <h5 class="">
        {{ title }}
    </h5>
</template>

<script setup lang="ts">

defineProps<{
    title:string
}>()

</script>

<style scoped>
h5{
    margin: 1rem 0 0 0;
    text-transform: uppercase;
    text-align: center;
    color: white;
}
</style>