import React from 'react'

const Number = (props) => {
    return(<div>
                {props.person.name} {props.person.number}
                <button onClick={() => props.deleteFunc(props.person)}> delete </button>
            </div>
        )
}

export default Number