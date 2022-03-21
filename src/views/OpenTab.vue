<template>
  <div> 
  
    <!-- <h1 class="font-bold mx-10 my-4 text-xl"> {{position}} </h1>
    <div class="flex m-4 py-2 border-2 space-x-5 mx-20 w-44 justify-center ">
      <a class="flex bg-black mx-2 text-white text  rounded"><Routerlink to ="./OpenTab">Open</Routerlink></a>
      <a class="flex  mx-2 text-white text-slate-500 hover:bg-blue-600 rounded"><Routerlink to ="./ClosedTab">Close</Routerlink></a>
    </div> -->


<div  v-for = "myObject in obj" :key="myObject.index" class="mx-1 m-4">
    <div class="border-2 mx-20 py-4 hover:bg-blue-200 rounded ">
      <h3 class="mx-4 item-center font-bold ">{{myObject.title}} </h3>
      <div class="flex justify-between ">
      <div class="flex space-x-3 mr-3">


          <RouterLink to="/ToInvited" class="border-2 m-3">{{ myObject.invited }}</RouterLink>
          <RouterLink to="./ToEvalute" class="border-2 m-3"> {{myObject.evalute}} </RouterLink>
          <RouterLink to="./ToPreselected" class="border-2 m-3">{{myObject.preselect}} </RouterLink>
          <RouterLink to="./ToDiscard" class="border-2 m-3">{{myObject.discard}}</RouterLink>
      </div>
      <div class="flex space-x-3 mr-3">
        <a class="">{{myObject.setting}}</a>
        <a class="">{{myObject.copy}}</a>
        <RouterLink to="./PositionDelete" class="">{{ myObject.deleted }}</RouterLink>  
        </div>  
    </div>
    </div>
</div>
  </div>

</template>

<script >
import { reactive } from "vue"
export default {
  name: 'OpenTab',
  setup() {
    const myObject = {
        
        title: 'Vue JS developer',
        invited: 'invited',
        evalute: 'evalute',
        preselect: 'preselected',
        discard: 'discard',
        copy: 'Copy',
        setting: 'Setting',
        deleted: 'Delete'      
    }
    const myObject1 = {
        
        title: 'Vue JS developer',
        invited: 'invited',
        evalute: 'evalute',
        preselect: 'preselected',
        discard: 'discard',
        copy: 'Copy',
        setting: 'Setting',
        deleted: 'Delete'      
    }
  var obj = new Array();
  obj.push(myObject);
  obj.push(myObject1);
  // console.log(obj)
    return {
      obj
    }
  },
  data() {
    return {
     position: ''
      
    }
  },
  methods: {
      onClick(obj) {
        console.log(obj)
      }
  },

  
}

</script>

<style>

</style>