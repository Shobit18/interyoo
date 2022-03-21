<template>
  <div class="items-center mx-48">
      
      
<div class=" justify-between flex w-full ">
    <div class="space-x-6 m-4 border-solid border-2  h-10  bg-white rounded-md py-2 ">
          <RouterLink to="/ToInvited" class=" m-3  hover:bg-sky-700 rounded-md">invited 2</RouterLink>
          <RouterLink to="./ToEvalute" class=" m-3  hover:bg-sky-700 rounded-md ">To evalute 0</RouterLink>
          <RouterLink to="./ToPreselected" class="m-3 hover:bg-sky-700 rounded-md">Preselected 0</RouterLink>
          <RouterLink to="./ToDiscard" class=" m-3 bg-sky-600 hover:bg-sky-700 rounded-md ">Discard 0</RouterLink>
    </div>
  <div class="m-4">
          <input type="text" placeholder="search" class="border-2 rounded-md"/>
          <button class="border-2 rounded-md mx-2">+</button>
  </div>

 </div>  
  <div> 
    <div class="text-3xl font-bold text-center">Candidate Discard'</div>
 </div>

  </div>
</template>

<script>
export default {
    name: 'ToDiscard',
    data() {
      return {
       

      }
    }
}
</script>

<style>

</style>