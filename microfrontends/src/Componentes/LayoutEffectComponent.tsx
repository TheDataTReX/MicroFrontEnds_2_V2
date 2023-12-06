import React, { useLayoutEffect, useRef } from 'react';

//interface de props

const LayoutEffectComponent: React.FC = () => {
    const divRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (divRef.current) {
            divRef.current.style.backgroundColor = 'blue';
        }
    }, []);

    return <div ref={divRef}>This div's background turns blue on mount</div>;
};

export default LayoutEffectComponent;
