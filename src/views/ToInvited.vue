<template>
  <div>
      <div class="space-x-2 flex">
          <h1 class="text-3xl font-bold m-4 ">vue js</h1>
          <button>setting</button>
      </div>
      
<div class=" justify-between flex w-full">
    <div class="space-x-6 m-4 border-solid border-2 w-100 ">
          <RouterLink to="/ToInvited" class="border-2 m-3 bg-sky-600 hover:bg-sky-700 rounded-sm">invited 2</RouterLink>
          <RouterLink to="./ToEvalute" class="border-2 m-3 ">To evalute 0</RouterLink>
          <RouterLink to="./ToPreselected" class="border-2 m-3">Preselected 0</RouterLink>
          <RouterLink to="./ToDiscard" class="border-2 m-3  ">Discard 0</RouterLink>
    </div>
    <div class="m-4">
          <input type="text" placeholder="search" class="border-2 rounded-md"/>
          <button class="border-2 rounded-md mx-2">+</button>
    </div>
      
 </div>  


      <div class=" border-2 m-4 hover:bg-blue-200 ">
          <div class="">
              <h1 class="text-lg font-bold m-4">Candidate Information</h1>
          </div>
          <div class=" m-4 text-center ">
              <h1 class="text-white hover:text-black">You cant invite Candidate until your email validation</h1>
          </div>
          <div class="flex space-x-2 m-4 mx-48 ">
              <div>
                <label>Full name</label> <br>
              <input v-model="name" class="border-4 rounded-md" />
              </div>
             <div>
                <label>Email</label><br>
              <input v-model="email" class="border-4 rounded-md" />
             </div>

              <div class="" >
                <label>Prefix</label><br>
              <input v-model="prefix" class="border-4 rounded-md" />
             </div>

              <div>
                <label>Phone</label><br>
              <input v-model="phone" class="border-4 rounded-md" />
             </div>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  m-4 rounded-full">
            Invite Candidate
            </button>
      </div>

  </div>
</template>

<script>
export default {
    name: 'ToInivte',
    data() {
      return {
         name:  '',
         email: '',
         prefix: '+',
         phone:  ' '

      }
    },
    // methods: {
    //   onClick
    // }

}
</script>

<style>

</style>