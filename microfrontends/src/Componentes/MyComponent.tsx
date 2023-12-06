import React, { useContext } from 'react';
import { MyContext } from './MyContext';

//interface de props

const MyComponent: React.FC = () => {
    const contextValue = useContext(MyContext);

    return <div>Context Value: {contextValue}</div>;
};

export default MyComponent;
