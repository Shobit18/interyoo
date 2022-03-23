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