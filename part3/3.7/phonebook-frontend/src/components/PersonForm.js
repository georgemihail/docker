import React from 'react'

const PersonForm = ({submit, nameChange, nameValue, numberChange, numberValue}) => {
    return(
    <div>
        <form onSubmit={submit}>
            <div>
                name: <input onChange={nameChange} value={nameValue}/>
            </div>
            <div>
                number: <input onChange={numberChange} value={numberValue}/>
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </div>
    )
}

export default PersonForm 