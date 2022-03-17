<template>
  <div>
      <div class="py-3">
        <input type = "text" placeholder="(Write here the Job title)">
      </div>

<div class="flex justify-between py-6">
    <div class="flex space-x-3 m-1">
          <div class="mx-3">All Team</div>
          <div class="mx-3">Public Link: Disabled</div>
      </div>

    <div class="flex mr-4">
        <div class="">Internal Notification</div>
    </div>
</div>

    <div class="flex">
        <div class="border-2 w-full h-1/4 m-1 mr-4 hover:bg-blue-200  flex ">
        
                <img class=" w-32 h-32 m-3" src="../assets/img .jpg" alt="Sunset in the mountains">
            <div class=" justify-between w-full flex space-x-6">
                    <div class="mx-3">
                        <div class="font-bold text-xl mb-2">Video Interview</div>
                        <h3>With 2 questions</h3>
                        <div class="space-x-3 py-3">
                            <button class="rounded-full border-8 border-solid">Edit</button>
                            <button class="rounded-full border-8 border-solid">Preview</button>
                        </div>
                    </div>  

                <div class=" m-3">
                    <div class="flex py-2 justify-end">
                        <labal>CANDIDATE THINKING TIME</labal>
                        <select class="h-6 mx-2 mr-2 ">
                            <option>2 minutes</option>
                            <option>3 minutes</option>
                            <option>5 minutes</option>
                        </select>
                    </div>    
                        <div class="flex py-2 justify-end">
                            <label>BRANDING COLOR AND LOGO</label>
                            <select class="h-6 mx-2 ">
                                <option>No theme</option>
                                <option> create theme</option> 
                            </select>
                        </div>   
                        <div class="flex py-2 justify-end">
                            <label>QUESTION AND RETAKE</label>
                            <select class="h-6 mx-2">
                                <option>1 takes</option>
                                <option>2 takes</option>
                                <option>3 takes</option>
                                <option>unlimitade</option>
                            </select>
                        </div>  
                    </div>      
                </div>
            </div>                             
    </div>  

<div class="flex py-4">
    <div class="border-2 w-full h-1/4 m-1 mr-4 hover:bg-blue-200">
      <div class="flex justify-between w-full">        
            <h1 class="font-bold text-xl mx-3">Candidate Notifications</h1> 
            <div class="mr-3">
                <button class="rounded-full border-8 border-solid">Edit template</button>
            </div>  
       </div>  

        <div class="">
         <div class="justify-between">   
            <div class="flex mx-4">

            <div class="flex">
                    <label>Send</label>
            <div class="flex mx-4">
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
            <div>
                <button>Edit</button>
            </div>
            </div>     
            </div>   
        <div>
            
        </div> 
               
        </div>
        </div>

        <div>
            <div class="flex mx-4 m-3">
            <label>Send</label>
           <div class="flex mx-4">
                <div>
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
            
            
        </div>
        </div>  

        <div>
            <div class="flex mx-4 m-3">
            <label>Send</label>
           <div class="flex mx-4">
                <div>
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
            
            
        </div>
        </div>
        </div>                             
    </div>  
    <button class="rounded-full border-8  bg-blue-200 border-solid">Add Messsage</button>
</div>
</template>

<script setup lang="ts">

</script>

<style>

</style>