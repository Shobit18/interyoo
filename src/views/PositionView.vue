<script setup>

import { reactive, ref } from "vue"
import OpenTab from "./OpenTab.vue";
import ClosedTab from "./ClosedTab.vue";

OpenTab
ClosedTab


const myArray =  ref(JSON.parse(localStorage.getItem('vue_interyoo2') || '[]'))
const qlength = ref();
qlength.value = myArray.value.length;



const activeTab = ref('OpenTab')

const state = reactive({
    
    product: 'User',
    image: '../assets/img .jpg',
    addPosition: 'Add Position', 

})

</script>

<template>
<div class="bg-white m-3 rounded-md p-3">

    <div class=" items-center mx-48">
    <div class=" justify-between flex mx-20 mb-3 "> 
    <h1 class="font-bold text-3xl">Position</h1>
        <div class="flex">
            <n-input v-model:value="value" type="text" placeholder="Search Postion here" class="w-max mt-3 rounded-r-none"/>
             
                <n-select
                    v-model:value="selectedValue"
                    filterable
                    placeholder=""
                    :options="options"
                    class="mt-3 w-6  border-l-1 rounded-r-none "
                    />
                    <n-select
                    v-model:value="selectedValue"
                    filterable
                    placeholder=""
                    :options="options"
                    class="mt-3 w-6 border-l-1 rounded-r-none "
                    />
        </div>
    </div>

        <div class="flex   mx-20 justify-between bg-white ">
           <div class="flex "> 
            <n-button type="primary" class="text-black activebg-green-100 rounded-r-none h-11" @click="activeTab = 'OpenTab'">Open {{qlength}} </n-button>
            <n-button type="primary" class="text-black activebg-green-100 rounded-l-none h-11" @click="activeTab = 'ClosedTab'">closed </n-button>
           </div>
          <div class="justify-end">
                Add New Position
            </div>  
        </div>

        <OpenTab v-if="activeTab === 'OpenTab'" />

        <ClosedTab v-if="activeTab === 'ClosedTab'" /> 


    </div>  
</div>
</template>


<style>

</style>