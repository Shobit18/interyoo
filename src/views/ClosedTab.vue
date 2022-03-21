<template>
  <div>


    <!-- <h1 class="font-bold mx-10 my-4 text-xl">Position </h1>
    <div class="flex m-4 py-2 border-2 space-x-5 mx-20 w-44 justify-center ">
      <a class="flex  mx-2 text-white text-slate-500 hover:bg-blue-600 rounded"><router-link to ="./OpenTab.vue">Open</router-link></a>
      <a class="flex bg-black mx-2 text-white text-slate-500 hover:bg-blue-600 rounded"><router-link to ="./ClosedTab.vue">Close</router-link></a>
    </div> -->

    <div class="border-2 mx-20 py-4 bg-white hover:bg-blue-200 rounded-3xl  m-4">
      <h3 class="mx-4 item-center font-bold ">Vue.js Developer </h3>
      <div class="flex justify-between ">
      <div class="flex space-x-3 mr-3">
          <RouterLink to="/ToInvited" class="border-2 m-3 bg-slate-100 rounded-md">invited 2</RouterLink>
          <RouterLink to="./ToEvalute" class="border-2 m-3 bg-slate-100 rounded-md">To evalute 0</RouterLink>
          <RouterLink to="./ToPreselected" class="border-2 m-3 bg-slate-100 rounded-md">Preselected 0</RouterLink>
          <RouterLink to="./ToDiscard" class="border-2 m-3 bg-slate-100 rounded-md">Discard 0</RouterLink>
      </div>
      <div class="flex space-x-3 mr-3">
        <div class="rounded-sm">Open Position</div> 
        <RouterLink to="./PositionDelete">Delete</RouterLink>
        </div>  
    </div>
    </div>

  </div>

</template>

<script>
export default {
  name: 'ClosedTab',
  data() {
    
  }
}
</script>

<style>

</style>