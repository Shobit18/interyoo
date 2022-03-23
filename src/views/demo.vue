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
