<script setup>



</script>


<template>
  <div> 
  
    <!-- <h1 class="font-bold mx-10 my-4 text-xl"> {{position}} </h1>
    <div class="flex m-4 py-2 border-2 space-x-5 mx-20 w-44 justify-center ">
      <a class="flex bg-black mx-2 text-white text  rounded"><Routerlink to ="./OpenTab">Open</Routerlink></a>
      <a class="flex  mx-2 text-white text-slate-500 hover:bg-blue-600 rounded"><Routerlink to ="./ClosedTab">Close</Routerlink></a>
    </div> -->

<!-- <h2 class="text-center" v-if="boards.length ==0">You don't have Item</h2>
<div class="boards-container" v-else>
  <div v-for="(board,index) in boards" :key="index" class="mx-1 m-4">
    <div class="border-2 mx-20 py-4 hover:bg-blue-200 bg-white rounded-3xl ">
      <h3 class="mx-4 item-center font-bold ">{{board.title}} </h3>
      <div class="flex justify-between ">
      <div class="flex space-x-3 mr-3">
          <RouterLink to="/ToInvited" class="border-2 m-3 bg-slate-100 rounded-md">{{ board.invited }}</RouterLink>
          <RouterLink to="./ToEvalute" class="border-2 m-3 bg-slate-100 rounded-md"> {{board.evalute}} </RouterLink>
          <RouterLink to="./ToPreselected" class="border-2 m-3 bg-slate-100 rounded-md">{{board.preselect}} </RouterLink>
          <RouterLink to="./ToDiscard" class="border-2 m-3 bg-slate-100 rounded-md">{{board.discard}}</RouterLink>
      </div>
      <div class="flex space-x-3 mr-3">
        <a class="">{{board.setting}}</a>
        <a class="">{{board.copy}}</a>
        <RouterLink to="./PositionDelete" class="">{{ board.deleted }}</RouterLink>  
        </div>  
    </div>
    </div>
  </div>

   <div class="flex border-2 mx-20 py-4 bg-white hover:bg-blue-200 rounded-3xl ">

  
      <RouterLink  to="/SetUp" class="mx-4 rounded-full" @click="createNewPosition">{{addPosition}}</RouterLink>
       <button @click="createNewPosition" class="mx-20 rounded-full">add</button> -->
    <!-- </div>
</div> -->

<div  v-for = "(myObject,index) in myArray" :key="index" class="mx-1 m-4">
    <div class="border-2 mx-20 py-4 hover:bg-blue-200 bg-white rounded-3xl ">
      <h3 class="mx-4 item-center font-bold ">{{myObject.title}} </h3>
      <div class="flex justify-between ">
      <div class="flex space-x-3 mr-3">
          <!-- <RouterLink to="/ToInvited" class="border-2 m-3 bg-slate-100 rounded-md">{{ myObject.invited }}</RouterLink>
          <RouterLink to="./ToEvalute" class="border-2 m-3 bg-slate-100 rounded-md"> {{myObject.evalute}} </RouterLink>
          <RouterLink to="./ToPreselected" class="border-2 m-3 bg-slate-100 rounded-md">{{myObject.preselect}} </RouterLink>
          <RouterLink to="./ToDiscard" class="border-2 m-3 bg-slate-100 rounded-md">{{myObject.discard}}</RouterLink> -->
      </div>
      <div class="flex space-x-3 mr-3">
        <!-- <a class="">{{myObject.setting}}</a> -->
        <!-- <a class="">{{myObject.copy}}</a> -->
        <!-- <RouterLink to="./PositionDelete" class="">{{ myObject.deleted }}</RouterLink>   -->
        </div>  
    </div>
    </div>
</div>
 <div class="flex border-2 mx-20 py-4 bg-white hover:bg-blue-200 rounded-3xl ">

  
      <!-- <RouterLink  to="/SetUp" class="mx-20 rounded-full" @click="createNewPosition">{{addPosition}}</RouterLink> -->
      <button @click="watch" class="mx-20 rounded-full">add</button>
    </div>
  </div>

</template>

<script  setup>
import { ref, reactive, toRefs, computed } from "vue"
const addPosition = ref('Add Position')

let myArray = ref([]);


const myArr = ([myArray])

    function createNewPosition() {
        var  obj1 = {
            title:"(Change the name of this title)",
            // invited:'invite',
            // evalute:'evolated',
            // preselect: 'preselected',
            // discard:'discard'
        };
      myArray.push(obj1);
      // console.log(myArray);
      console.log(myArr)
      
    } 


// function mounted()   {
//   this.myArr = JSON.parse(localStorage.getItem('myArr')) || []
// }

function watch()  {
//  myArr(newValue, oldValue) 
//    localStorage.setItem("myArr", maArr) ;
 let obj1 = {
            title:"(Change the name of this title)",
            // invited:'invite',
            // evalute:'evolated',
            // preselect: 'preselected',
            // discard:'discard'
        };
myArray.value.push(obj1);
localStorage.setItem('myArray', JSON.stringify(myArray));


// if (localStorage.getItem("myArray") === null) {
//   let retrievedData = localStorage.getItem("myArray");
//   let myar = JSON.parse(retrievedData);
//   myArray = myar;
//   console.log(myar);
// } 

const retrievedData = localStorage.getItem("myArray")

const retr2 = JSON.parse(retrievedData)

console.log(retr2)

 
}
  // data() {
  //   return {
  //     myArray: [],
  //     addPosition: 'Add Position',      
      //  myArr:myArray
      
             
  //   }
  // },
  // mounted() {
  //   if(localStorage.myArray) {
  //     this.myArray = JSON.parse(localStorage.getItem('myArray')) || []
  //   }
  // },
  // watch: {
    // myArray: {
    //   handler(newArray) {
    //     console.log('Updated')
    //     localStorage.myArr = JSON.stringify(newArray)
    //   },
    //   deep: true
    // }
  //   myArray(newValue, oldValue) {
  //     localStorage.setItem("myArray", JSON.stringify(newValue))
  //   }
  // }
    // createNewPosition() {
    //     let obj1 = {
    //         title:"(Change the name of this title)",
    //         invited:'invite',
    //         evalute:'evolated',
    //         preselect: 'preselected',
    //         discard:'discard'
    //     };
    //       myArray.push(obj1);
    //       console.log(myArray);
    //     } 
      

// data : ()=> ({
//   boards: [
//     {
//       title: "Vue JS",
//     }
     
//   ]
// })

  


</script>

<style>

</style>