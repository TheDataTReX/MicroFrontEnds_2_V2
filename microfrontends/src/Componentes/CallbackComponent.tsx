import React, { useState, useCallback } from 'react';


//interface de props

const CallbackComponent: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const increment = useCallback(() => {
        setCount(c => c + 1);
    }, []);

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={increment}>Increment</button>
        </div>
    );
};

export default CallbackComponent;
