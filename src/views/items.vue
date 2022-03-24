<template>
<div>
    <div  v-for = "(myObject,index) in myArray" :key="index" class="mx-1 m-4">
    <div class="border-2 mx-20 py-4 hover:bg-blue-200 bg-white rounded-3xl ">
      <h3 class="mx-4 item-center font-bold ">{{myObject.title}} </h3>
      <div class="flex justify-between ">
      <div class="flex space-x-3 mr-3">
          <RouterLink to="/ToInvited" class="border-2 m-3 bg-slate-100 rounded-md">{{ myObject.invited }}</RouterLink>
          <RouterLink to="./ToEvalute" class="border-2 m-3 bg-slate-100 rounded-md"> {{myObject.evalute}} </RouterLink>
          <RouterLink to="./ToPreselected" class="border-2 m-3 bg-slate-100 rounded-md">{{myObject.preselect}} </RouterLink>
          <RouterLink to="./ToDiscard" class="border-2 m-3 bg-slate-100 rounded-md">{{myObject.discard}}</RouterLink>
      </div>
      <div class="flex space-x-3 mr-3">
        <a class="">{{myObject.setting}}</a>
        <a class="">{{myObject.copy}}</a>
        <RouterLink to="./PositionDelete" class="">{{ myObject.deleted }}</RouterLink>  
        </div>  
    </div>
    </div>
</div>
</div>
</template>

<script setup>

const myArray = ref([]);

// const myArr = ref([myArray])

    // function createNewPosition() {
    //     var  obj1 = {
    //         title:"(Change the name of this title)",
    //         invited:'invite',
    //         evalute:'evolated',
    //         preselect: 'preselected',
    //         discard:'discard'
    //     };
    //   myArray.push(obj1);
    //   console.log(myArray);
      
    // } 

const items_list  = ref(
  {
      id: 0,
      title: "this is title"
  }
)


 myArray.push(items_list)
</script>