<template>
  <div>
    <h1 class="font-bold mx-10 my-4 text-xl">Position </h1>
    <div class="flex m-4 py-2 border-2 space-x-5 mx-20 w-44 justify-center ">
      <a class="flex  mx-2 text-white text-slate-500 hover:bg-blue-600 rounded"><router-link to ="./OpenTab.vue">Open</router-link></a>
      <a class="flex bg-black mx-2 text-white text-slate-500 hover:bg-blue-600 rounded"><router-link to ="./ClosedTab.vue">Close</router-link></a>
    </div>

    <div class="border-2 mx-20 py-4 hover:bg-blue-200 rounded ">
      <h3 class="mx-4 item-center font-bold ">Vue.js Developer </h3>
      <div class="flex justify-between ">
      <div class="flex space-x-3 mr-3">
          <a class="border-2 m-3">invited 2</a>
          <a class="border-2 m-3">To evalute 0</a>
          <a class="border-2 m-3">Preselected 0</a>
          <a class="border-2 m-3">Discard 0</a>
      </div>
      <div class="flex space-x-3 mr-3">
        <div class="rounded-sm">Open Position</div>
        <a class="">Delete</a>  
        </div>  
    </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'ClosedTab',
}
</script>

<style>

</style>