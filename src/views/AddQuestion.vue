<template>
<div>
 <form @submit="onSubmit">
     
    <div class="items-center mx-48">
        <div class="flex m-3">
            <div class="border-dashed hover:border-blue-50 hover:shadow-md bg-white rounded-md">
                <img class="w-32 h-32 m-3 rounded-2xl" v-bind:src="img" id="show-modal" @click="showModal = !showModal"/>
                
            </div> 
            <div class="font-bold mx-16  ">
                <input v-model="title" @change="changeTitle" @input="$emit('update:modelValue', $event.target.value)"  placeholder="(Enter job title)" class="rounded-md bg-slate-100  hover:border-4 " />
            </div>
        </div>
    </div>    
 
    <Teleport to="body">
    <modal :show="showModal" @close="showModal = false" >
    </modal>
  </Teleport>




<div v-for="(object,index) in myArray" :key="index">
    <div class="flex  bg-white m-5 border-2 border-dashed hover:border-blue-50 hover:bg-blue-200 rounded-3xl">
    <div class=" h-1/4  m-3 bg-white hover:bg-blue-200   flex rounded-3xl w-full ">
       <h1 class="space-x-2"> {{index+1}} </h1>       
                <!-- <img class=" w-32 h-32 m-3 mx-16 rounded-2xl" v-bind:src="img"  alt="Sunset in the mountains" id="show-modal" @click="showModal = true" /> -->
              <img class=" w-32 h-32 m-3 mx-16 rounded-2xl" v-bind:src="img"  alt="Sunset in the mountains" id="show-modal" @click="showModal = !showModal" />
              
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
        <button type="button" class=" w-full border-2 border-dashed m-5 text-center  h-9 bg-white hover:bg-blue-200 rounded-3xl " @click="addNewQuestion(); count++" >Add Question</button> 
    </div>

<div v-if="addFarewall">  
<div class="flex w-full bg-white m-5 border-2 border-dashed hover:border-blue-50 hover:bg-blue-200 rounded-3xl">
    <div class=" h-1/4  m-3 bg-white hover:bg-blue-200   flex rounded-3xl w-full ">
        
                <img class=" w-32 h-32 m-3 rounded-2xl" v-bind:src="img"  alt="Sunset in the mountains" @click="showModal = !showModal">
                    <div class="item-center w-full m-4"> 
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
        <button class="m-5 text-center w-full  h-9 bg-white hover:bg-blue-200  rounded-3xl" @click="addFarewall = !addFarewall">Add Farewell video and Messsage</button>
        <!-- <h1 class=" m-3 text-center  h-9 bg-white hover:bg-blue-200  rounded-3xl" @click="addFarewall= !addFarewall">Add Farewell video and Messsage</h1>  -->
    </div>
 </div>     
<div class="justify-between flex">
    <div>
        <RouterLink to="/SetUp" class="rounded-full border-8 border-solid bg-slate-400 hover:bg-blue-200" @click="dtSave(); onSubmit()">Save and go back</RouterLink>
        <!-- <button type="button" @click="dtSave()">save</button> -->
    </div>
    
    <button type="button" class="rounded-full border-8 border-solid bg-slate-400 hover:bg-blue-200" @click="prevInterview = !prevInterview">Preview Interview </button>
    
    </div>

    <Teleport to="body">
    <previewInterview :show="prevInterview" @close="prevInterview = false" >
    </previewInterview>
  </Teleport>


 </form>   
</div>
</template>

<script setup>
import { ref, watchEffect, reactive, computed  } from 'vue'
import { NButton } from  'naive-ui'
import Modal from './Modal.vue'
import previewInterview from './previewInterview.vue'


Modal
previewInterview

const showModal = ref(false)
const prevInterview = ref(false)

NButton

const message= ref('')
const addFarewall = ref(false)
const count = ref(0)
const ques = ref('')
const ans = ref('')
// const showModel = ref(false)
// definedProps({
//     ModelValue: String
// })

const STORAGE_KEY = 'vue_interyoo2'
const STORAGE_KEY2 = 'title1'

const img = ref("https://picsum.photos/200/300")
const myArray =  ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))
const title =  ref(JSON.parse(localStorage.getItem(STORAGE_KEY2) || '[]'))


const arrcount = myArray.value.length;
console.log(arrcount);
// const isReturn = computed(() => tittle === 'Write You title' )

// const isData = computed( 
//     () => 
//     !isReturn.value ||  
//     img.value || ques.value || ans.value
    
// )
const  changeTitle = () => {
      localStorage.setItem(STORAGE_KEY2, JSON.stringify(title.value))
}
function addNewQuestion()  {
     const generateId = () => Math.random().toString(36)
 let obj1 = {
            
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

  localStorage.setItem('img', JSON.stringify(img.value))
    
    })

  let retrievedData = localStorage.getItem("myArray");
  let retitle = localStorage.getItem('title');
  let reimg = localStorage.getItem('')
// retrievedData = localStorage.getItem("myArray")
const retr2 = JSON.parse(retrievedData)
  console.log(retr2);
  const ret2 = JSON.parse(retitle)
  console.log(ret2)
  console.log(reimg)



}

function remove(index) {
  
//   myArray.value.splice(myArray.value.indexOf(stat), 1)
myArray.value.splice(index, 1);
localStorage.setItem(STORAGE_KEY,JSON.stringify(myArray.value));
 
}


function dtSave() {
    
    // console.log(myArray);
    //     var getJson = localStorage.getItem('t STORAGE_KEY')
    // if(getJson) {
    //     myArray = JSON.parse(getJson)
    // }
    // console.log(myArray)
}

function onSubmit() {
// console.log('data s')
    img.value='',
    message.value='',
    ques.value='',
    ans.value=''
    console.log('Data submitted')
    // for(let i=0; i<=count.value; i++) {
    //     console.log(i);
    // }
// console.log(onSubmit)
console.log(myArray)
    
}




</script>

<style scoped>

</style>