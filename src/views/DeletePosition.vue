<template>
  <div>
    <h1 class="font-bold mx-10 my-4 text-xl">Position </h1>
    <div class="flex m-4 py-2 border-2 space-x-5 mx-20 w-44 justify-center ">
      <a class="flex  mx-2 text-white text-slate-500 hover:bg-blue-600 rounded"><router-link to ="./OpenTab.vue">Open</router-link></a>
      <a class="flex bg-black mx-2 text-white text-slate-500 hover:bg-blue-600 rounded"><router-link to ="./ClosedTab.vue">Close</router-link></a>
    </div>
  </div>

</template>

<script setup lang="ts">

</script>


<style>
</style>