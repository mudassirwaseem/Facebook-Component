import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp,faComment ,faShare} from '@fortawesome/free-solid-svg-icons'

const Todolist=(props) =>{
    return(
    <div>

<span>   <li>{props.text}</li>  </span>
    </div>

    )

}
export default Todolist;