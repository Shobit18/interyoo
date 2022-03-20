<template>
  <div>
     <div class="m-4  text-center  ">
     <form @submit.prevent="handleLogIn" class="border-2  h-60 w-1/2  mx-36 ">
    <h1 class=" bg-blue-200">{{ title }}</h1>
    <div class=" mx-72">
         <div class="flex text-center m-4">
            <label>Email</label>    
            <input v-model="email" class="mx-2 border-2 " />
         </div>
     
        <div class="flex text-center">
            <label>Password</label>
            <input v-model="password" class="mx-2 border-2" />
        </div> 
      </div>
      <div class = "m-4 flex  justify-between mx-72">
          <div> 
            <RouterLink to="/SignUp" class="rounded-full bg-blue-50 space-x-2"> Login</RouterLink>
          </div>
          <h1 class=" space-x-2">Forget Password ?</h1>
      </div>
      
         </form>    
     
    </div> 
       </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Login',
            email: '',
            password: ''
        }
    },
    methods: {
        handleLogIn() {
            console.log(this.email, this.password )
        }
    }

}
</script>

<style>

</style>