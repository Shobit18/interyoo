<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
<div>
        <nav class=" bg-white shadow-lg mx-3 flex space-x-10 text-center py-3 ">
          <div class=" flex ">
              <!-- Website Logo -->
              <a href="#" class="flex items-center  py-2 ml-10 w-1/6">
                <span class="font-semibold  text-lg">Logo</span>
              </a>
          </div>
            <div class="flex items-center space-x-20 w-3/6 " >
                    <RouterLink to="/SetUp">Dashboard</RouterLink>
                    <RouterLink to="/position">Position</RouterLink>
                    <RouterLink to="/report">Report</RouterLink>
                    <RouterLink to="/AddQuestion">AddQuestion</RouterLink>
                    <RouterLink to="/ToInvited">ToInvited</RouterLink>
            </div>   
        
      
      <div class=" flex w-2/6 ">
          <button class="bg-blue-200 item-end  font-bold inset-0 py-2 px-2 mr-4 rounded  ">Login</button>
           <button class="bg-blue-200 item-end font-bold inset-0 py-2 px-2 mr-4 rounded  ">Acount</button>
        </div>
        
      </nav>  

  <RouterView />
  
</div>


  
</template>

<style>

</style>
