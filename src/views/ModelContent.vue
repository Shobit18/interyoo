<template>
    <div>
        <h1>{{ title }}</h1>
        <button @click="isOpen = false" class="">Cancel</button>
        <button @click="isOpen = false" class="">Delete</button>
    </div>
</template>

<script setup>
import { defineProps } from 'vue'

defineProps({
    title: String,
    
})
</script>