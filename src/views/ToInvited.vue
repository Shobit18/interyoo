<template>
  <div>
      <div class="space-x-2 flex">
          <h1 class="text-3xl font-bold m-4 ">vue js</h1>
          <button>setting</button>
      </div>
      
      <div class="space-x-6 m-4 border-solid border-2 w-96 ">
          <button class="bg-sky-600 hover:bg-sky-700 rounded-sm">Invited</button>
          <button class=" hover:bg-sky-700 rounded-sm">To evalute</button>
          <button class=" hover:bg-sky-700 rounded-sm">Preselected</button>
          <button class=" hover:bg-sky-700 rounded-sm">Discard</button>
      </div>

      <div>
          <div class="">
              <h1>Candidate Information</h1>
          </div>
          <div>
              <h1>You cant invite Candidate until your email validation</h1>
          </div>
          <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
            Button
            </button>
      </div>

  </div>
</template>

<script>
export default {
    name: 'ToInivte'

}
</script>

<style>

</style>