import { useState } from 'react';

function Counter() {
    // Initialize state for the count
    const [count, setCount] = useState(0);

    // Function to handle increment
    const handleIncrement = () => {
        setCount(count + 1);
    };

    // Function to handle decrement
    const handleDecrement = () => {
        setCount(count - 1);
    };

    // Function to handle reset
    const handleReset = () => {
        setCount(0);
    };

    return (
        <div style={{ textAlign: 'center', marginTop: '20px' }}>
            <p style={{ fontSize: '24px', fontWeight: 'bold' }}>Current Count: {count}</p>
            <button 
                onClick={handleIncrement} 
                style={{ margin: '5px', padding: '10px', backgroundColor: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
            >
                Increment
            </button>
            <button 
                onClick={handleDecrement} 
                style={{ margin: '5px', padding: '10px', backgroundColor: 'red', color: 'white', border: 'none', borderRadius: '5px' }}
            >
                Decrement
            </button>
            <button 
                onClick={handleReset} 
                style={{ margin: '5px', padding: '10px', backgroundColor: 'gray', color: 'white', border: 'none', borderRadius: '5px' }}
            >
                Reset
            </button>
        </div>
    );
}

export default Counter;

