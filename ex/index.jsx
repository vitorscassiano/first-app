import React from 'react';
import ReactDOM from 'react-dom';
import Family from './family';
import Member from './member';

ReactDOM.render(
    <div>
        <Family lastName='Cassiano'>
            <Member name='Vitor' />
            <Member name='Dimas' />
            <Member name='Tereza' />
        </Family>
    </div>
    , document.getElementById('app'));