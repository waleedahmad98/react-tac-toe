import React from 'react';

export default function Box(props) {

    return (
        <div className="box" onClick={()=>{props.setValue('X')}}>
            {props.value}

        </div>);
}
