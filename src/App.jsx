
// We have a state that is updating the counter by incrementing and decrementing it by one 

// How can you archive this using the `useReducer` hook?

// ```jsx
// import React, { useState } from 'react';

// function Counter() {
//   const [count, setCount] = useState(0);
  
//   const increment = () => setCount(prev => prev + 1);
//   const decrement = () => setCount(prev => (prev > 0 ? prev - 1 : 0));

//   return (
//     <div>
//       <p>Count: {count}</p>
//       <button onClick={increment}>Increment</button>
//       <button onClick={decrement}>Decrement</button>
//     </div>
//   );
// }

// export default Counter;
// ```
import React from 'react'


export default function App (){
  let initialCount = {
    count: 0
  }
    function reducer(state, action){
      switch(action.type){
        case 'increment':
            return { count: state.count + 1 }
          break;
        case 'decrement':
            return { count: state.count - 1 }
          break;
        default :
          return
      } 
    }
    const [counter, dispatch] = React.useReducer(reducer, initialCount)
    const handleReducer = (type) =>{
      dispatch({type})
  }
  return (
    <div>
      <button onClick={()=> handleReducer('increment')}>
        Increment
      </button>
      <p>Counter: {counter.count}</p>
      <button onClick={()=> handleReducer('decrement')}>
        Decrement</button>
    </div>
  )
}