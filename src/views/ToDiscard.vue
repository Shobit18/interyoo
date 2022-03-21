<template>
<div>
<div class=" justify-between flex w-full">
    <div class="space-x-6 m-4 border-solid border-2 w-100 ">
          <!-- <button class=" hover:bg-sky-700 rounded-sm">Invited</button>
          <button class=" hover:bg-sky-700 rounded-sm">To evalute</button>
          <button class=" hover:bg-sky-700 rounded-sm">Preselected</button>
          <button class="bg-sky-600 hover:bg-sky-700 rounded-sm">Discard</button> -->
          <RouterLink to="/ToInvited" class="border-2 m-3">invited 2</RouterLink>
          <RouterLink to="./ToEvalute" class="border-2 m-3">To evalute 0</RouterLink>
          <RouterLink to="./ToPreselected" class="border-2 m-3">Preselected 0</RouterLink>
          <RouterLink to="./ToDiscard" class="border-2 m-3 bg-sky-600 hover:bg-sky-700 rounded-sm ">Discard 0</RouterLink>
    </div>
    <div class="m-4">
          <input type="text" placeholder="search" class="border-2 rounded-md"/>
          <button class="border-2 rounded-md mx-2">+</button>
  </div>
</div>
 <div>
    <div class="text-3xl font-bold text-center">Candidate Discard</div>
 </div>

 </div>  

</template>

<script>
export default {
    name: 'ToEvalute'

}
</script>

<style>

</style>