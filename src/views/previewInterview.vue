<script setup>
import { ref, computed } from 'vue'
import { defineComponent } from 'vue'
 import { NButton } from 'naive-ui'

NButton
 
const myArray =  ref(JSON.parse(localStorage.getItem('vue_interyoo2') || '[]'))
const qlength = ref();
qlength.value = myArray.value.length;


const currentRef = ref(1);
    const currentStatusRef = ref("process");

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

// const buttonTypeRef = computed(() => {
//       switch (currentStatusRef.value) {
//         case "error":
//           return "error";
//         case "finish":
//           return "success";
//         default:
//           return "default";
//       }
//     });
    

    
//       current: currentRef,
//       currentStatus= currentStatusRef,
     
//       function handleButtonClick() {
//         currentRef.value = currentRef.value % 4 + 1;
//       },
//       buttonType= buttonTypeRef
    
  
  

</script>

<template>

<Transition name="modal">
<div v-if="show" class="modal-mask">
    
    <div class="modal-wrapper ">
   
        
          <div class="modal-container rounded-lg h-max w-max mt-3 ">
            <div class="flex  justify-between">
               <h1></h1>
              <button type="button" class="" @click="show = false">removed</button>
                         </div>
                  <div class="overflow-y-auto flex ">      
                      <div class="modal-header">
                            <slot>
                            <div class="  text-center rounded-lg  mt-16 mb-9 h-72  w-72   border-2 bg-blue-600"> 
                              <img v-bind:src="img" class=" h-72 w-72  border-4  border-dashed shadow-lg text-center rounded-lg" />
                            </div>
                            </slot>
                          </div>

                          <div class="modal-body mt-16 mx-3 ">
                          <slot>
                          <div class=" space-x-2 rounded-md h-72  w-72 ">
                            <div class=" rounded-md ">
                              <h1 class="font-bold text-lg m-3 mt-12">Video Interview</h1>
                                <p class="m-3">UI/UX Desinger at <span>Azilen</span></p>
                               <div class="flex">  
                                <n-button type="primary" class="text-black inset-x-0  m-3 rounded-md" @click="startRecord()" >Start Interview</n-button>
                                <h1  class=" text-center mt-4">{{qlength}} questions</h1>
                              </div>
                            </div>
                          </div>
                          </slot>
                      </div>
                </div>
          </div>    
            <!-- <n-space vertical>
    <n-steps :current="current" :status="currentStatus">
      <n-step title="I Me Mine">
        <div class="n-step-description">
          <p>Al through the day, I me mine I me mine, I me mine</p>
          <n-button
            v-if="current === 1"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
      <n-step title="Let It Be">
        <div class="n-step-description">
          <p>When I find myself in times of trouble Mother Mary comes to me</p>
          <n-button
            v-if="current === 2"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
      <n-step title="Come Together">
        <div class="n-step-description">
          <p>Here come old flat top He come grooving up slowly</p>
          <n-button
            v-if="current === 3"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
      <n-step title="Something">
        <div class="n-step-description">
          <p>Something in the way she moves Attracts me like no other lover</p>
          <n-button
            v-if="current === 4"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
    </n-steps>
    <n-radio-group :value="currentStatus" size="medium" name="basic">
      <n-radio-button value="error">
        Error
      </n-radio-button>
      <n-radio-button value="process">
        Process
      </n-radio-button>
      <n-radio-button value="wait">
        Wait
      </n-radio-button>
      <n-radio-button value="finish">
        Finish
      </n-radio-button>
    </n-radio-group>
  </n-space>
          </div>       -->
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
 margin:  auto;
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