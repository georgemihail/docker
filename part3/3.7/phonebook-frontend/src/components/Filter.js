import React from 'react'

const Filter = (props) => {

    return(
        <div>
            filter shown with: <input onChange={props.change} value={props.value}/>
        </div>
    )
}

export default Filter