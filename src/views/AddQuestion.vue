<template>
    <div class="items-center mx-48" >
        <div class="flex hover:bg-blue-200  m-3 rounded-3xl  bg-white">
            <img class=" w-32 h-32 m-3 rounded-2xl" src="https://picsum.photos/200/300" />

            <div class="font-bold m-3">
                <input type="text" class="rounded-md bg-slate-100  hover:border-4 w-full" placeholder="(Write here the job title)" />
            </div>
        </div>


    <div class="flex">
        <div class="border-2 w-full h-1/4  m-3 bg-white hover:bg-blue-200  flex rounded-3xl ">
        
            <img class=" w-32 h-32 m-3 rounded-2xl" v-bind:src="img"  alt="Sunset in the mountains">
            <div>
                <div>
                    <textarea class="w-full border-4 mx-64 py-2 m-4 rounded-3xl" placeholder="Add question"></textarea>
                </div>
                    <div class="items-center">
                    <textarea class="w-full border-4 mx-64 py-10 m-2 rounded-3xl" placeholder="Add Ans "></textarea>
                </div>
            </div>
        </div>                       
    </div>  

    <div class="w-full  ">
        <h1 class=" m-3 mx-2 text-center  h-9 bg-white hover:bg-blue-200  rounded-3xl">Add Question</h1> 
    </div>

    <div class="w-full ">
        <h1 class=" m-3 text-center  h-9 bg-white hover:bg-blue-200  rounded-3xl">Add Farewell video and Messsage</h1> 
    </div>   
<div class="justify-between flex">
    <div>
        <button class="rounded-full border-8 border-solid bg-slate-400 hover:bg-blue-200">Feadback</button>
    </div>
    
    <button class="rounded-full border-8 border-solid bg-slate-400 hover:bg-blue-200">Preview Interview </button>
</div>
    
</div>
</template>

<script>
export default {
    data() {
        return {
            img: "https://picsum.photos/200/300",

        }
    },
    methods: {
        onClick() {
            
        }
    }
}
</script>

<style scoped>

</style>