<script setup>
import { ref } from 'vue'
 import { NButton } from 'naive-ui'

 
const props = defineProps({
  show: Boolean
})

const img = ref("https://picsum.photos/200/300")
const showButton = ref(true)
//  const show  = ref()

function removePop() {
   show.value= false
}

function startRecord() {
  showButton.value = false
}

function stopRecord() {
  showButton.value = true
}
</script>

<template>

<Transition name="modal">
<div v-if="show" class="modal-mask">
    
    <div class="modal-wrapper ">
   
        
          <div class="modal-container rounded-lg h-full mt-2">
            <div class="flex justify-between">
               <h1 class="m-3 font-bold">Record Intro</h1>
              <button type="button" @click="show = false">removed</button>
              <!-- <button type="button" @click="removePop()">removed</button> -->
            </div>
                  <div class="overflow-y-auto ">      
                      <div class="modal-header">
                            <slot>
                            <div class=" items-center text-center rounded-lg  mx-3  border-2 bg-blue-600"> 
                              <img v-bind:src="img" class=" h-96  w-full  border-4  border-dashed shadow-lg text-center rounded-lg" />
                            </div>
                            </slot>
                          </div>

                          <div class="modal-body mt-16">
                          <slot>
                          <div class="bg-slate-200 m-3 rounded-md h-48">
                            <div class="text-center rounded-md">
                              <h1>icon</h1>
                              <h1 class="font-bold"> Permission Denied </h1>
                              <ul class=" m-3 ">
                              <li>Make sure your computer has a camera,</li>
                              <li> that you have given access to the camera </li> 
                              <li>and that no other application is currently</li>
                              <li> using it.</li>
                              </ul>
                            </div>
                          </div>
                          </slot>
                      </div>
                </div>
               
              <div v-if="showButton">
                <div class="text-center mt-16">
                    <n-button type="primary" class="text-black inset-x-0 bottom-0 m-3 rounded-md" @click="startRecord()" >Start Recording</n-button>
              </div> 
                </div>
              <div v-else>
                <div class="text-center mt-16">
                    <n-button type="error" class="text-black inset-x-0 bottom-0 m-3 rounded-md" @click="stopRecord()" >Stop Recording</n-button>
                </div>
              </div>
    </div>


        
    </div>  
    </div>

  </Transition>
</template>

<style>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  width: 600px;
  height: 600px;
 margin: 90px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;

  
}


.modal-header h3 {
  margin-top: 0;
  color: #42b983;
}

.modal-body {
  margin: 20px 0;
}

.modal-default-button {
  float: right;
}

/*
 * The following styles are auto-applied to elements with
 * transition="modal" when their visibility is toggled
 * by Vue.js.
 *
 * You can easily play with the modal transition by editing
 * these styles.
 */

.modal-enter-from {
  opacity: 0;
}

.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .modal-container,
.modal-leave-to .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>