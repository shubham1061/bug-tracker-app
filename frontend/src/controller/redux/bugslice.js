import {createSlice}from'@reduxjs/toolkit'
import {retrieveBugs} from './bugController'

const slice=createSlice({
    name:"bug",
    initialState:[],
    reducers:{
        getBugs:state => retrieveBugs(),
        createBugs:(state,actions)=>{

        },
        updatebugs:(state,actions)=>{
            
        },
        markComplete:(state,action)=>{

        }
        
         

    }
})

export default slice.reducer;

export const{getBugs,createBugs,updatebugs,markComplete} =slice.actions