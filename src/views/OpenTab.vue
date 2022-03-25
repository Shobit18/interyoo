
<template>
  <div> 
  
<div  v-for = "(myObject,index) in myArray" :key="index" class="mx-1 m-4">
    <div class="border-2 mx-20 py-4 hover:bg-blue-200 bg-white rounded-3xl ">
      <h3 class="mx-4 item-center font-bold ">{{myObject.title}} </h3>
      <div class="flex justify-between ">
      <div class="flex space-x-3 mr-3">
          <RouterLink to="/ToInvited" class="border-2 m-3 bg-slate-100 rounded-md">{{ myObject.invited }}</RouterLink>
          <RouterLink to="./ToEvalute" class="border-2 m-3 bg-slate-100 rounded-md"> {{myObject.evalute}} </RouterLink>
          <RouterLink to="./ToPreselected" class="border-2 m-3 bg-slate-100 rounded-md">{{myObject.preselect}} </RouterLink>
          <RouterLink to="./ToDiscard" class="border-2 m-3 bg-slate-100 rounded-md">{{myObject.discard}}</RouterLink>
      </div>
      <div class="flex space-x-3 mr-3">
        <button class="">{{myObject.setting}}</button>
        <button class="">{{myObject.copy}}</button>
        <button @click="remove(stat)" class="">{{ myObject.deleted }}</button>  
        </div>  
    </div>
    </div>
</div>
 <div class="flex border-2 mx-20 py-4 bg-white hover:bg-blue-200 rounded-3xl ">

  
      <RouterLink  to="/SetUp" class="mx-20 rounded-full" @click="createNewPosition">Add New Position</RouterLink>
      <!-- <button to="/setUp" @click="createNewPosition" class="mx-20 rounded-full">Add New Postion </button> -->
    </div>
  </div>

</template>

<script  setup>
import { ref, reactive, toRefs, computed, watchEffect } from "vue"
const addPosition = ref('Add Position')
// let myArray = ref([]);
const STORAGE_KEY = 'vue_interyoo'


const myArray =  ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))


// myArray.value.push(storedNames);
function createNewPosition()  {
 let obj1 = {
            title:"(Change the name of this title)",
            invited:'invite',
            evalute:'evolated',
            preselect: 'preselected',
            discard:'discard',
            setting: 'setting',
            copy: 'copy',
            deleted: 'delete'
        }
myArray.value.push(obj1);


// function mounted() {
//   this.myArray = JSON.parse(localStorage.getItem(myArray.value))
// }

// watch: (myArray, (newValue, oldValue) => {
//   if(islocalStorage() )
//   console.log(newValue)
//   console.log(oldValue)
// })




watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(myArray.value))
})

  let retrievedData = localStorage.getItem("myArray");
  
retrievedData = localStorage.getItem("myArray")
const retr2 = JSON.parse(retrievedData)
  console.log(retr2);

}
//     }
//  } 
//    watch : {
//       if(localStorage.myArray) {
//       this.myArray = JSON.parse(localStorage.getItem('myArray')) || []
//    }
  

   
// const storedNames = JSON.parse(localStorage.getItem("myArray"));
// myArray.value.push(storedNames);



function remove(stat) {
  
  myArray.value.splice(myArray.value.indexOf(stat), 1)
  // myArray.value = splice(myArray.value.indexOf(stat), 1)

  // retr2.value.splice(retr2.indexOf(stat), 1)
}
       


</script>

<style scoped>

</style>