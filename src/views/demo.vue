import { ref, reactive, toRefs, computed } from "vue"
const myArray = [];
export default {
  

name: 'OpenTab',

setup() {


 
  // const state = reactive(
  //   {
  //     myArray: []
      
  //   }
  // )
  // const arrayObj = computed(function() {
  //   return `${state.myArray}`
  // })
  return {
    // ...toRefs(state)
  }

},

  data() {
    return {
        addPosition: 'Add Position',      
       myArr:myArray,
      
             
    }
  },
  methods: {
      createNewPosition() {
        let obj1 = {
          title:"(Change the name of this title)"
        };
        myArray.push(obj1);
    console.log(myArray);
      } 
      }

  
}








<h2 class="text-center" v-if="boards.length ==0">You don't have Item</h2>
<div class="boards-container" v-else>
  <div v-for="(board,index) in boards" :key="index" class="mx-1 m-4">
    <div class="border-2 mx-20 py-4 hover:bg-blue-200 bg-white rounded-3xl ">
      <h3 class="mx-4 item-center font-bold ">{{board.title}} </h3>
      <div class="flex justify-between ">
      <div class="flex space-x-3 mr-3">
          <RouterLink to="/ToInvited" class="border-2 m-3 bg-slate-100 rounded-md">{{ board.invited }}</RouterLink>
          <RouterLink to="./ToEvalute" class="border-2 m-3 bg-slate-100 rounded-md"> {{board.evalute}} </RouterLink>
          <RouterLink to="./ToPreselected" class="border-2 m-3 bg-slate-100 rounded-md">{{board.preselect}} </RouterLink>
          <RouterLink to="./ToDiscard" class="border-2 m-3 bg-slate-100 rounded-md">{{board.discard}}</RouterLink>
      </div>
      <div class="flex space-x-3 mr-3">
        <a class="">{{board.setting}}</a>
        <a class="">{{board.copy}}</a>
        <RouterLink to="./PositionDelete" class="">{{ board.deleted }}</RouterLink>  
        </div>  
    </div>
    </div>
  </div>

   <div class="flex border-2 mx-20 py-4 bg-white hover:bg-blue-200 rounded-3xl ">

  
      <!-- <RouterLink  to="/SetUp" class="mx-4 rounded-full" @click="createNewPosition">{{addPosition}}</RouterLink> -->
      <button @click="createNewPosition" class="mx-20 rounded-full">add</button>
    </div>
</div>