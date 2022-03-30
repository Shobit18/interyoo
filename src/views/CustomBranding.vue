<template>
    <div class="bg-white h-full rounded-md  shadow-md m-9 mx-48">
        <h1 class="m-4 font-bold ">Custom Brandings</h1>
        <p class="m-4">Create themes with a custom logo, button colors and company name to use on your interviews</p>
        <div class="bg-white  rounded-md  shadow-md m-4 py-2 h-24">
            <div class="flex space-x-4 m-4  mx-9">
                <div>
                    <h1 class="font-bold">Interyoo</h1>
                </div>
                <div>
                    <p>Theme</p>
                    <h1 class="font-bold">Interyoo</h1>
                </div>
            </div>
        </div>
      <div v-for="(cus, index) in custBind" :key="index"> 
        <div class="bg-white  rounded-md  shadow-md m-4 py-2 h-24 ">
          <div class="flex justify-between">  
            <div class="flex space-x-4 m-4  mx-9 ">
                <div>
                    <h1 class="font-bold">{{cus.title}}</h1>
                </div>
                <div>
                    <p>{{cus.theme}}</p>
                    <h1 class="font-bold">{{cus.des}}</h1>
                </div>
               
            </div>
             <div class="mx-3 space-x-2">
                        <button>Copy</button>
                        <button @click="remove(stat)">Delete</button>
                       
                </div>    
         </div>   
        </div>

        
      </div>
        <n-button class=" bg-green-600 m-4 shadow-md border-2 items-center rounded-full h-10  w-48 " @click="createTheme()">Creat New Theme</n-button>
    </div>
</template>

<script setup>
import { ref, reactive, computed, watchEffect} from 'vue'
import { NButton } from 'naive-ui'
import { useMessage } from "naive-ui";

 const message = useMessage();
const showModalRef = ref(false);

NButton
const STORAGE_KEY = 'customBind'

const custBind =  ref(JSON.parse(localStorage.getItem(STORAGE_KEY) || '[]'))


// const state = reactive({
//     title: 'Interyoo',
//     theme: 'Theme',
//     des: 'Interyoo'
// })

// const myInfo = computed(() => {
//   return `state.title && state.theme && state.des`
// })

function createTheme() {

    const info = {
        title: 'Interyoo',
        theme: 'Theme',
        des: 'Interyoo',
    }

    custBind.value.push(info)



watchEffect(() => {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(custBind.value))
})

  let retrievedData = localStorage.getItem("custBind");
  
retrievedData = localStorage.getItem("custBind")
const retr2 = JSON.parse(retrievedData)
  console.log(retr2);

}

function remove(stat) {
  
  alert('Are you sure to Delete This')
  custBind.value.splice(custBind.value.indexOf(stat), 1)
 
}



</script>