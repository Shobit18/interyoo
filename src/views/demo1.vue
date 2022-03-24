import { ref, reactive, toRefs, computed } from "vue"
const myArray = [];




 
  // const state = reactive(
  //   {
  //     myArray: []
      
  //   }
  // )
  // const arrayObj = computed(function() {
  //   return `${state.myArray}`
  // })
  

  
  //   return {
  //       addPosition: 'Add Position',      
  //      myArr:myArray,
      
  // },

function createNewPosition() {
        let obj1 = {
          title:"(Change the name of this title)"
        };
        myArray.push(obj1);
    console.log(myArray);

       return {
        addPosition: 'Add Position',      
       myArr:myArray,
      
  }
      } 



      openTab

      <div  v-for = "(myObject,index) in myArr" :key="index" class="mx-1 m-4">
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
 <div class="flex border-2 mx-20 py-4 bg-white hover:bg-blue-200 rounded-3xl ">

  
      <RouterLink  to="/SetUp" class="mx-20 rounded-full" @click="createNewPosition">{{addPosition}}</RouterLink>
      <!-- <button @click="createNewPosition" class="mx-20 rounded-full">add</button> -->
    </div>