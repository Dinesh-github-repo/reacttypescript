import React,{useReducer} from 'react'
interface StateType{
    count:number;
}
interface ActionType{
    type:'Increment' | 'Decrement';
}
const Counter = () => {
    const initialState ={count:0};
    const reducer = (state:StateType, action:ActionType) =>{
        switch(action.type){
            case "Increment":
                return {count:state.count +1}
            case "Decrement":
                return {count:state.count -1}
            default:
                return state;
        }
    }
    const [state, dispatch] =useReducer(reducer, initialState);
  return (
    <div>
        <button onClick={()=> dispatch({type:"Increment"})}>Increment</button>
        <button onClick={()=> dispatch({type:"Decrement"})}>Decrement</button>

        <p>State: {state.count}</p>
    </div>
  )
}

export default Counter