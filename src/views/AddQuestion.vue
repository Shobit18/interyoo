<template>
    <div>
        <div class="flex hover:bg-blue-200">
            <img class=" w-32 h-32 m-3" src="https://picsum.photos/200/300" />

            <div class="font-bold m-4">
                <input type="text" placeholder="(Write here the job title)" />
            </div>
        </div>


    <div class="flex">
        <div class="border-2 w-full h-1/4 m-1 mr-4 hover:bg-blue-200  flex ">
        
            <img class=" w-32 h-32 m-3" v-bind:src="img"  alt="Sunset in the mountains">
            <div>
                <div>
                    <textarea class="w-full border-4 mx-64 py-2 m-4" placeholder="Add question"></textarea>
                </div>
                    <div class="items-center">
                    <textarea class="w-full border-4 mx-64 py-10 m-2 " placeholder="Add Ans "></textarea>
                </div>
            </div>
        </div>                       
    </div>  

    <div class="w-full border-2 ">
        <h1 class="  mx-2 text-center  h-9 hover:bg-blue-200 ">Add Question</h1> 
    </div>

    <div class="w-full border-2 m-2">
        <h1 class="text-center mx-1 h-9 hover:bg-blue-200">Add Farewell video and Messsage</h1> 
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