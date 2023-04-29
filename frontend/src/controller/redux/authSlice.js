import {createSlice}from'@reduxjs/toolkit'

const slice= createSlice({
    name :"auth",
    initialState:{
        admin:false,
        loggedIn:false,

    },
    reducers:{
        signIn:(state,action)=>{
            const{name,password}= action.payload;
           state.loggedIn= true;
           state.admin=true;
        //    console.log(state);

        },
        SignOut:(state,action)=>{
            state.loggedIn=false;
            state.admin =false;
        },
        createUser:(state,action)=>{

        }
        
    } 

})

export default slice.reducer;
export const{signIn,SignOut,createUser} =slice.actions;