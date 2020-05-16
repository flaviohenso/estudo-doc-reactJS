import React from 'react'

function ActionLink(){
    function handleClick(e){
        e.preventDefault()
        console.log('clicou no link')
    }

    return(
        <a href='#' onClick={handleClick}>
            Clique aqui
        </a>
    )
}

export default ActionLink