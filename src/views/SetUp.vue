<template>
  <div class="items-center mx-48">
    
    <form>
      <div class="py-3 m-4 ">
        <input v-model="title" placeholder="(Write your Job title)"   class="w-full bg-slate-200 hover:border-4 border-solid rounded-md"  >
      </div>
    </form>
<div class="flex justify-between py-6">
    <div class="flex space-x-3 m-1">
          <div class="mx-3 hover:border-4 border-solid rounded-md">All Team</div>
          <div class="mx-3 hover:border-4 border-solid rounded-md">Public Link: Disabled</div>
      </div>

    <div class="flex mr-4">
        <div class= "hover:border-4 border-solid rounded-md">Internal Notification</div>
    </div>
</div>

    <div class="flex">
        <div class="border-2 w-full h-1/4 m-1 mr-4 bg-white hover:bg-blue-200  flex  rounded-3xl">
        
                <img class=" w-32 h-32 m-3 rounded-2xl" v-bind:src ="{img}" :value="{desc}">
            <div class=" justify-between w-full flex space-x-6">
                    <div class="mx-3">
                        <div class="font-bold text-xl mb-2">Video Interview</div>
                        <h3>With {{qlength}} questions</h3>
                        <div class="space-x-3 py-3">
                            <RouterLink to="/AddQuestion" class="rounded-full border-8 border-solid">Edit</RouterLink>
                            <button class="rounded-full border-8 border-solid">Preview</button>
                        </div>
                    </div>  

                <div class=" m-3 rounded-sm">
                    <div class="flex py-2 justify-end ">
                        <labal>CANDIDATE THINKING TIME</labal>
                        <select class="h-6 mx-2 mr-2 w-30 rounded-md">
                            <option>2 minutes</option>
                            <option>3 minutes</option>
                            <option>5 minutes</option>
                        </select>
                    </div>    
                        <div class="flex py-2 justify-end">
                            <label class="">BRANDING COLOR AND LOGO</label>
                            <select class="h-6 mx-2 w-24 rounded-md">
                                <option>No theme</option>
                                <option> create theme</option> 
                            </select>
                        </div>   
                        <div class="flex py-2 justify-end">
                            <label>QUESTION AND RETAKE</label>
                            <select class="h-6 mx-2 w-30 rounded-md">
                                <option>1 takes</option>
                                <option>2 takes</option>
                                <option>3 takes</option>
                                <option>unlimited</option>
                            </select>
                        </div>  
                    </div>      
                </div>
            </div>                             
    </div>  

<div class="flex py-4">
    <div class="border-2 w-full h-1/4 m-1 mr-4 bg-white hover:bg-blue-200 rounded-3xl">
      <div class="flex justify-between w-full">        
            <h1 class="font-bold text-xl mx-3">Candidate Notifications</h1> 
            <div class="mr-3">
                <button class="rounded-full border-8 border-solid"> Edit template</button>
            </div>  
       </div>



    <div class="">
        <div class="flex mx-4 m-3 justify-between">
            <div class="flex ">
                <label>Send</label>
            <div class="flex mx-4 ">
                    <select>
                        <option>Email</option>
                        <option>SMS</option>
                        <option>WhatsApp</option>
                    </select>
                </div>
                <div class="mx-4">
                    <select>
                        <option>EN Invitation</option>
                        <option>Completed</option>
                        <option>Reminder</option>
                    </select>
                </div>

                <div class="mx-4">
                    <select>
                        <option>On Invitation</option>
                        <option>No response in 1h</option>
                        <option>Interview Completed</option>
                    </select>
                </div>
            </div>  
                <div class="space-x-2">
                    <button class="rounded-full border-2 border-solid">Edit</button>
                    <button class="rounded-full border-2 border-solid">Delete</button>
                </div>          
        </div>

        <div v-if="isVisible" class="flex mx-4 m-3 justify-between">
            <div class="flex ">
                <label>Send</label>
            <div class="flex mx-4 ">
                    <select>
                        <option>Email</option>
                        <option>SMS</option>
                        <option>WhatsApp</option>
                    </select>
                </div>
                <div class="mx-4">
                    <select>
                        <option>EN Invitation</option>
                        <option>Completed</option>
                        <option>Reminder</option>
                    </select>
                </div>

                <div class="mx-4">
                    <select>
                        <option>On Invitation</option>
                        <option>No response in 1h</option>
                        <option>Interview Completed</option>
                    </select>
                </div>
            </div>  
                <div class="space-x-2">
                    <button class="rounded-full border-2 border-solid">Edit</button>
                    <button class="rounded-full border-2 border-solid">Delete</button>
                </div>          
        </div>


    </div>
    <div>


    </div>
        <div>

        <div class="text-white">
            <button class="rounded-full bg-black m-4" @click="isVisible = true"> + Add message</button>   
        </div> 
        </div>
    </div>                             
</div>  

<div class="flex justify-between">
    <button class="rounded-full bg-blue-200 m-4" @click="Submit">Save</button>
    <RouterLink to="/ToInvited" class="rounded-full bg-blue-200 m-4">Invite Candidate</RouterLink>
</div>
    
</div>
</template>

<script setup>
import { ref, reactive } from 'vue'

const title = ref();
title.value = JSON.parse(localStorage.getItem("title1") || '[]');

const myArray =  ref(JSON.parse(localStorage.getItem('vue_interyoo2') || '[]'))
const qlength = ref();
qlength.value = myArray.value.length;
  
const invite = ref('')
// const isVisible= ref(false)
const state= reactive({
    title: '',
    value: '',
    img: 'https://picsum.photos/200/300',
    desc:"Sunset in the mountains"
})


//  title.value = localStorage.getItem('title');
// console.log(title.value)
</script>

<style>

</style>