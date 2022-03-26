<template>
<div>
    <div class="items-center mx-48" >
        <div class="flex m-3  ">
            <div class="border-dashed hover:border-blue-50 hover:shadow-md bg-white rounded-md">
                <img class="w-32 h-32 m-3 rounded-2xl" v-bind:src="img" />
            </div>   
            <div class="font-bold mx-16  ">
                <input type="text" class="rounded-md bg-slate-100  hover:border-4 " placeholder="(Write here the job title)" />
            </div>
        </div>
        


<div v-for="(object, index) in myArray" :key="index">
    <div class="flex">
        <div class="border-2 border-dashed hover:border-blue-50 w-full h-1/4  m-3 bg-white hover:bg-blue-200  flex rounded-3xl ">
        
            <img class=" w-32 h-32 m-3 rounded-2xl" v-bind:src="img"  alt="Sunset in the mountains">
            <div>
                <div>
                    <textarea v-model="message" class="w-full hover:shadow-md border-4 mx-48 py-2 m-4 rounded-3xl" placeholder="Add question"></textarea>
                </div>
                    <div class="items-center">
                    <textarea v-model="message" class="w-full hover:shadow-md border-4 mx-48 py-10 m-2 rounded-3xl" placeholder="Add Ans "></textarea>
                </div>
            </div>
        </div>                       
    </div>  
</div>
    <div class=" ">
        <button class=" w-full border-2 border-dashed m-2 text-center  h-9 bg-white hover:bg-blue-200 rounded-3xl" @click="addNewQuestion" >Add Question</button> 
    </div>

<div v-if="addFarewall">  
<div class="flex w-full bg-white m-2 border-2 border-dashed hover:border-blue-50 hover:bg-blue-200 rounded-3xl">
    <div class=" h-1/4  m-3 bg-white hover:bg-blue-200   flex rounded-3xl w-full ">
        
                <img class=" w-32 h-32 m-3 rounded-2xl" v-bind:src="img"  alt="Sunset in the mountains">
                    <div> 
                        <div>
                           <textarea v-model="message" class="w-full hover:shadow-md border-4 mx-48 py-2 m-4 rounded-3xl text-center" placeholder=" Done!!!" ></textarea>
                        </div>
                        <div class="items-center">
                            <textarea v-model="message" class="w-full hover:shadow-md border-4 mx-48 py-10 m-2 rounded-3xl" placeholder=" Thank you for completing the interview, we will contact you shortly. "></textarea>
                        </div>
                 </div> 
        </div>
                   <div>

        <button class="mx-3" @click="addFarewall = !addFarewall">Delete</button>
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
        <button class="rounded-full border-8 border-solid bg-slate-400 hover:bg-blue-200">Feadback</button>
    </div>
    
    <button class="rounded-full border-8 border-solid bg-slate-400 hover:bg-blue-200">Preview Interview </button>
</div>
    </div>   
</div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
const message= ref('')
const addFarewall = ref(false)

const STORAGE_KEY = 'vue_interyoo2'
const img = ref("https://picsum.photos/200/300")
const myArray =  ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))


function addNewQuestion()  {
 let obj1 = {
            img : 'https://picsum.photos/200/300',
            message: '',
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
// function addFarewall() {
//      addFarewall.value = true
// }




// export default {
//     // data() {
//     //     return {
//     //         img: ,

//     //     }
//     // },
//     methods: {
//         onClick() {
            
//         }
//     }
// }
</script>

<style scoped>

</style>