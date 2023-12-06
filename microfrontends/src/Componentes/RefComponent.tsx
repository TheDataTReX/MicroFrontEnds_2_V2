import React, { useRef, useEffect } from 'react';

//interface de props

const RefComponent: React.FC = () => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef.current?.focus();
    }, []);

    return (
        <div>
            <input ref={inputRef} type="text" />
        </div>
    );
};

export default RefComponent;
