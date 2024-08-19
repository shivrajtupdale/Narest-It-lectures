
// import React, { useReducer } from 'react';
import CounterDisplay from './CounterDisplay';
import CounterControl from './CounterControl';

const counterReducer = (state, action) => {
    switch (action.type) {
        case 'increment':
            return { count: state.count + 1 };
        case 'decrement':
            return { count: state.count - 1 };
        case 'reset':
            return { count: 0 };
        default:
            throw new Error('Unknown action type');
    }
};

const Counter2 = () => {
    const [state, dispatch] = useReducer(counterReducer, { count: 0 });

    return (
        <div>
            <h1>Simple Counter App</h1>
            <h2>{state.count}</h2>
            {/* <button onClick={()=> dispatch({type : "increment"})}>Add</button> */}
            <CounterDisplay count={state.count} />
            <CounterControl  action={dispatch}/>
        </div>
    );
};

export default Counter2;
