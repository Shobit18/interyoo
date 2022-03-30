<template>
  <div> 
<div  v-for = "(myObject,index) in myArray" :key="index" class="mx-1 m-4">
    <div class="border-2 mx-20 py-4 hover:bg-blue-200 bg-white rounded-3xl ">
      <RouterLink to="./setUp" class="mx-4 item-center font-bold ">{{title}} </RouterLink>
      <div class="flex justify-between ">
      <div class="flex space-x-3 mr-3">
          <RouterLink to="/ToInvited" class="border-2 m-3 bg-slate-100 rounded-md">{{ myObject.invited }}</RouterLink>
          <RouterLink to="./ToEvalute" class="border-2 m-3 bg-slate-100 rounded-md"> {{myObject.evalute}} </RouterLink>
          <RouterLink to="./ToPreselected" class="border-2 m-3 bg-slate-100 rounded-md">{{myObject.preselect}} </RouterLink>
          <RouterLink to="./ToDiscard" class="border-2 m-3 bg-slate-100 rounded-md">{{myObject.discard}}</RouterLink>
      </div>
      <div class="flex space-x-3 mr-3">
        <RouterLink to="/SetUp" class="">{{myObject.setting}}</RouterLink>
        <RouterLink to="" class="">{{myObject.copy}}</RouterLink>
       <div>
        <button @click="remove(stat)" class="">{{ myObject.deleted }}</button> 
        <!-- <button @click="isOpen =true" class="">{{myObject.deleted}}</button>
        <teleport to="body" class="text-center bg-blue-50">
          <div class="" v-if="isOpen">
            <div class="text-center bg-blue-5">
              <ModelContent
                title="Are you sure to Delete this"
                />
            </div>
          </div>
        </teleport> -->
           
       </div> 
        
        </div>  
    </div>
    </div>
</div>
 <div class="flex border-2 mx-20 py-4 bg-white hover:bg-blue-200 rounded-3xl ">

  
      <RouterLink  to="/SetUp" class="mx-20 rounded-full" @click=" createNewPosition">Add New Position </RouterLink>
      <!-- <button to="/setUp" @click="createNewPosition(); count++" class="mx-20 rounded-full">Add New Postion {{ count }}</button> -->
      
    </div>
     <!-- <button @click="increment">count is: {{ count }}</button> -->
  </div>

</template>

<script  setup>
import { ref, reactive,defineProps, toRefs, computed, watchEffect } from "vue"

const count = ref(0)
const isOpen = ref(false)
// let myArray = ref([]);
const STORAGE_KEY = 'vue_interyoo'

const title = ref();
title.value = JSON.parse(localStorage.getItem("title1") || '[]');

defineProps({
  count:Number
})


const myArray =  ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))


// myArray.value.push(storedNames);
function createNewPosition()  {
  const generateId = () => Math.random().toString(36)
  // count.value++;
 let obj1 = {
            // title:"(Change the name of this title)",
            id:generateId(),
            invited:'invite',
            evalute:'evolated',
            preselect: 'preselected',
            discard:'discard',
            setting: 'setting',
            copy: 'copy',
            deleted: 'delete'
        }
myArray.value.push(obj1);




watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(myArray.value))
})

  let retrievedData = localStorage.getItem("myArray");
  
retrievedData = localStorage.getItem("myArray")
const retr2 = JSON.parse(retrievedData)
  console.log(retr2);

}


function remove(stat) {
  
  // myArray.value.splice(myArray.value.indexOf(stat), 1)
  myArray.value.splice(stat, 1);
localStorage.setItem(STORAGE_KEY,JSON.stringify(myArray.value));
 
}
     
// function increment() {
//   count.value++
// }     

// function open() {
//   isOpen.value = true
  
// }
// function close() {
//   isOpen.value = false
// }

</script>

<style scoped>

</style>