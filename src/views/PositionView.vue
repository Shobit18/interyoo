<script setup>
import { reactive, ref } from "vue"
import OpenTab from "./OpenTab.vue";
import ClosedTab from "./ClosedTab.vue";

OpenTab
ClosedTab

const activeTab = ref('OpenTab')

const state = reactive({
    
    product: 'User',
    image: '../assets/img .jpg',
    addPosition: 'Add Position', 

})


</script>

<template>


  <div class=" items-center mx-48 ">

    <div class="flex m-5 py-2 border-2 space-x-5 mx-20 w-44 justify-center bg-white rounded-3xl ">
        <a class="flex  mx-2"><button class=" focus:bg-green-600 rounded" @click="activeTab = 'OpenTab'">Open</button></a>
        <a class="flex  mx-2"><button class="focus:bg-green-600 rounded" @click="activeTab = 'ClosedTab'">closed</button></a>
    </div>

<OpenTab v-if="activeTab === 'OpenTab'" />

<ClosedTab v-if="activeTab === 'ClosedTab'" /> 


</div>  

</template>


<style>

</style>