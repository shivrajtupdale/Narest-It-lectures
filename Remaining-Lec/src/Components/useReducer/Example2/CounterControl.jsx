

const CounterControl = ({action}) => {
    // console.log(action);
    return (
        <div>
            <button onClick={() => action({ type: 'increment' })}>Increment</button>
            <button onClick={() => action({ type: 'decrement' })}>Decrement</button>
            <button onClick={() => action({ type: 'reset' })}>Reset</button>

        </div>
    );
};

export default CounterControl;
