import React, { useState, useMemo } from 'react';

//interface de props

const MemoComponent: React.FC = () => {
    const [count, setCount] = useState<number>(0);

    const doubleCount = useMemo(() => {
        return count * 2;
    }, [count]);

    return (
        <div>
            <p>Count: {count}, Double: {doubleCount}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

export default MemoComponent;
