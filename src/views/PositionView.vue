
<template>
<div>
    <div class="flex m-4 py-2 border-2 space-x-5 mx-20 w-44 justify-center ">
        <a class="flex bg-black mx-2 text-white text-slate-500 hover:bg-blue-600 rounded"><button class=" bg-blue-200 " @click="activeTab = 'OpenTab'">Open</button></a>
        <a class="flex  mx-2 text-white text-slate-500 hover:bg-blue-600 rounded"><button @click="activeTab = 'ClosedTab'">closed</button></a>
    </div>

    <div class="flex border-2 mx-20 py-4 hover:bg-blue-200 rounded ">

      <RouterLink to="/SetUp" class="mx-20 rounded-full">Add Position</RouterLink>
    </div>

 <!-- <component :is="activeTab" /> -->
<OpenTab v-if="activeTab === 'OpenTab'" />
<ClosedTab v-if="activeTab === 'ClosedTab'" />
  



</div>

</template>

<script >
import OpenTab from "./OpenTab.vue";
import ClosedTab from "./ClosedTab.vue";

export default {
  name: 'PositionView',
  components: {
    OpenTab,
    ClosedTab
},
data() {
  return {
    activeTab: 'ClosedTab'
  }
   
}
}
</script>

<style>

</style>