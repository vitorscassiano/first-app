import React from 'react';
import { childrenWithProps } from '../Utils/ReactUtils';

export default props => {
    return <div>
        <h1>Familia:</h1>
        { childrenWithProps(props.children, props) }
    </div>
};