<template>
<div>
 <form @submit.prevent="onSubmit1">   
    <div class="items-center mx-48">
        <div class="flex m-3  ">
            <div class="border-dashed hover:border-blue-50 hover:shadow-md bg-white rounded-md">
                <img class="w-32 h-32 m-3 rounded-2xl" v-bind:src="img2" />
            </div>   
            <div class="font-bold mx-16  ">
                <input v-model="title"  class="rounded-md bg-slate-100  hover:border-4 " />
            </div>
        </div>
        


<div v-for="(object,index) in myArray" :key="index">
    <div class="flex w-full bg-white m-2 border-2 border-dashed hover:border-blue-50 hover:bg-blue-200 rounded-3xl">
    <div class=" h-1/4  m-3 bg-white hover:bg-blue-200   flex rounded-3xl w-full ">
       <h1 class="space-x-2"> {{index+1}} </h1>       
                <img class=" w-32 h-32 m-3 mx-16 rounded-2xl" v-bind:src="img"  alt="Sunset in the mountains">
                    <div class=" items-center w-full mx-3"> 
                        <div class="">
                           <textarea v-model="object.ques"   :id="'que_' + id" class="w-full hover:shadow-md border-4   py-2 m-4 rounded-3xl text-center" placeholder="Add your Question" ></textarea>
                        </div>
                        <div class="items-center">
                            <textarea v-model="object.ans" :id="'ans_' + id" class="w-full hover:shadow-md border-4  py-10 m-2 rounded-3xl text-center" placeholder=" Add Your Answer"></textarea>
                        </div>
                 </div> 
        </div>
        <div>
            <button @click="remove(index)" class="">Delete</button>
            <button class="">Setting</button>
        </div>   
     </div>  
</div>
    <div class=" ">
        <button class=" w-full border-2 border-dashed m-2 text-center  h-9 bg-white hover:bg-blue-200 rounded-3xl " @click="addNewQuestion(); count++" >Add Question</button> 
    </div>

<div v-if="addFarewall">  
<div class="flex w-full bg-white m-2 border-2 border-dashed hover:border-blue-50 hover:bg-blue-200 rounded-3xl">
    <div class=" h-1/4  m-3 bg-white hover:bg-blue-200   flex rounded-3xl w-full ">
        
                <img class=" w-32 h-32 m-3 rounded-2xl" v-bind:src="img"  alt="Sunset in the mountains">
                    <div class="item-center w-full mx-3"> 
                        <div>
                           <textarea v-model="message"  class="w-full hover:shadow-md border-4  py-2 m-4 rounded-3xl text-center" placeholder=" Done!!!" ></textarea>
                        </div>
                        <div class="items-center">
                            <textarea v-model="message" class="w-full hover:shadow-md border-4  py-10 m-2 rounded-3xl" placeholder=" Thank you for completing the interview, we will contact you shortly. "></textarea>
                        </div>
                 </div> 
        </div>
        <div>
            <button class="mx-9" @click="addFarewall = !addFarewall">Delete</button>
        </div>   
     </div>                          
    
</div>   
 <div v-else>
    <div class="">
        <button class="m-3 text-center w-full  h-9 bg-white hover:bg-blue-200  rounded-3xl" @click="addFarewall = !addFarewall">Add Farewell video and Messsage</button>
        <!-- <h1 class=" m-3 text-center  h-9 bg-white hover:bg-blue-200  rounded-3xl" @click="addFarewall= !addFarewall">Add Farewell video and Messsage</h1>  -->
    </div>
 </div>     
<div class="justify-between flex">
    <div>
        <RouterLink to="/SetUp" class="rounded-full border-8 border-solid bg-slate-400 hover:bg-blue-200" @click="dtSave()">Save and go back</RouterLink>
        <!-- <button type="button" @click="dtSave()">save</button> -->
    </div>
    
    <button class="rounded-full border-8 border-solid bg-slate-400 hover:bg-blue-200">Preview Interview </button>
    </div>
</div>
 </form>   
</div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
const message= ref('')
const addFarewall = ref(false)
const count = ref(0)
const ques = ref('')
const ans = ref('')
// const tittle = ref('Write Your Job')

const STORAGE_KEY = 'vue_interyoo2'
const STORAGE_KEY2 = 'title1'
const STORAGE_KEY3 = 'img1'
const img = ref("https://picsum.photos/200/300")
const myArray =  ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
const title =  ref(JSON.parse(localStorage.getItem(STORAGE_KEY2) || '[]'))
const img2 =  ref(JSON.parse(localStorage.getItem(STORAGE_KEY3) || '[]'))
const arrcount = myArray.value.length;
console.log(arrcount);


function addNewQuestion()  {
     const generateId = () => Math.random().toString(36);
 let obj1 = {
            tittle: '',
            id:generateId(),
            img : 'https://picsum.photos/200/300',
            // ques: 'this is question'+generateId(),
            // ans: 'this is question'+generateId()
            ques: '',
            ans : '',
           }
myArray.value.push(obj1);

console.log(myArray.value.length)

// function getData() {
//     console.log('Values: ' , ques.value, ans.value)
// }

watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(myArray.value))
  localStorage.setItem(STORAGE_KEY2, JSON.stringify(title.value))
  localStorage.setItem(STORAGE_KEY3, JSON.stringify(img2.value))
})

  let retrievedData = localStorage.getItem("myArray");
  let retitle = localStorage.getItem("title");
  let reimg = localStorage.getItem("img2");
  
// retrievedData = localStorage.getItem("myArray")
const retr1 = JSON.parse(retrievedData)
console.log(retr1);
const retr2 = JSON.parse(retitle)
  console.log(retr2);
  const retr3 = JSON.parse(reimg)
  console.log(retr3);

}

function remove(index) {
  
//   myArray.value.splice(myArray.value.indexOf(stat), 1)
myArray.value.splice(index, 1);
localStorage.setItem(STORAGE_KEY,JSON.stringify(myArray.value));
 
}

// function handler(myArray){
//     localStorage.myArray = JSON.stringify(myArray)
// }

function dtSave() {
    
    console.log(myArray);

}

function onSubmit1(e) {


    console.log('Data submitted')
    e.preventDefault();
}


</script>

<style scoped>

</style>