<template>
<div>

  <n-button @click="showModal = true">
    Start Me up
  </n-button>
 
  <n-modal v-show="showModal">
    <n-card
      style="width: 600px"
      title="Modal"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <template #header-extra>
        Oops!
      </template>
      Content
      <template #footer>
        Footer
      </template>
    </n-card>
  </n-modal>
</div>
</template>

<script setup >
import { defineComponent, ref } from "vue";

const showModal=ref(false);


</script>