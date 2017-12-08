import React from 'react';

export default props => {
    return <div>
        <h1>Familia:</h1>
        { React.cloneElement(...props) }
        {/* { React.cloneElement(props.children, {...props}) } */}
    </div>
};