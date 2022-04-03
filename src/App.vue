<script setup>
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template >
<div class="w-full ">
        <nav class="  bg-white w-full shadow-lg  flex space-x-10 text-center h-16 ">
          <div class=" flex ">
              <!-- Website Logo -->
              <a href="#" class="flex items-center  py-2 ml-10 w-1/6">
                <span class="font-semibold  text-lg">Logo</span>
              </a>
          </div>
            <div class="flex items-center space-x-20 w-full " >
                    <RouterLink to="/SetUp">Dashboard</RouterLink>
                    <RouterLink to="/position">Position</RouterLink>
                    <!-- <RouterLink to="/report">Report</RouterLink>
                    <RouterLink to="/AddQuestion">AddQuestion</RouterLink>
                    <RouterLink to="/ToInvited">ToInvited</RouterLink> -->
                    <RouterLink to="/CustomBranding">Custom Branding</RouterLink>
            </div>   
    
      
      <div class=" flex justify-end ">
          <RouterLink to="/LogIn" class="bg-blue-200 item-end  font-bold inset-0 py-2 px-2 mr-4 rounded  ">Login</RouterLink>
           <RouterLink to="/SignUp" class="bg-blue-200 item-end font-bold inset-0 py-2 px-2 mr-4 rounded  ">Acount</RouterLink>
        </div>
        
      </nav>  

  <RouterView />
  
</div>


  
</template>

<style>

</style>
