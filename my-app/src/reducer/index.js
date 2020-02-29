export const initialState ={
    list:[
        { item: 'Learn React', 
        completed:false, 
        id:384521489451 },

        { item:'Learn Redux', 
        completed:false,
        id:3548710235 }
    ] }



    export const todoReducer = (state, action )=>{
        console.log(state,action)
        if(action.type === 'ADD TODO' ){
        return{
            ...state,
            list:[...state.list, {
                item:action.payload,
                completed:false,
                id: Date.now()
            
            }]
        }
        } else if( action.type === 'CLEAR TODO'){
            return {
                ...state, 
                list: state.list.filter(item => !item.completed)
            }
      
        }
    
    
    
    
    
    
    
      return state;
    };