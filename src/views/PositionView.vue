<template>

<div class=" items-center mx-48 ">

    <div class="flex m-5 py-2 border-2 space-x-5 mx-20 w-44 justify-center bg-white rounded-3xl ">
        <a class="flex  mx-2     rounded" ><button class=" focus:bg-green-600 rounded" @click="activeTab = 'OpenTab'">Open</button></a>
        <a class="flex  mx-2  focus:bg-blue-600 rounded"  ><button class=" focus:bg-green-600 rounded" @click="activeTab = 'ClosedTab'" v-bind:click="changeButton" :class="[!changeColor ? 'bg-blue-200': '']" >closed</button></a>
    </div>

    <!-- <div class="flex border-2 mx-20 py-4 bg-white hover:bg-blue-200 rounded-3xl ">

  
      <RouterLink  to="/SetUp" class="mx-20 rounded-full" @click="onClick">{{addPosition}}</RouterLink>
    </div> -->
    <!-- <OpenTab :myObjects="myObjects" />  -->


   <!-- <component :is="activeTab" /> -->
<OpenTab v-if="activeTab === 'OpenTab'" />
<!-- <OpenTab v-if="activeTab === 'OpenTab'" /> -->
<ClosedTab v-if="activeTab === 'ClosedTab'" />

</div>

</template>

<script >
import { reactive } from 'vue'
import OpenTab from "./OpenTab.vue";
import ClosedTab from "./ClosedTab.vue";

export default {
  name: 'PositionView',
  
  components: {
    OpenTab,
    ClosedTab
},
setup() {
 
},



data() {
  return {
    activeTab: 'OpenTab',
    product: 'User',
    image: '../assets/img .jpg',
    addPosition: 'Add Position', 
    changeColor: true,
    
   

  }
},
methods: {
  changeButton() {
    this.changeColor = !this.changeColor
  },
  onClick() {


  }
},


}
</script>

<style>

</style>