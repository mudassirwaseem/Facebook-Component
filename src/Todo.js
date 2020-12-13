import React, { useState } from 'react';
import Todolist from './Todolist'



function Todo() {

    const [input, inputList] = useState()
    const [items, setItems] = useState([])

    const setvalue = (e) => {
        inputList(e.target.value)

    }

    const Listofitem = () => {
        setItems((olddata) => {
            return [...olddata, input]

        })
        inputList("")
    }
    return (
        <div className="main">
            <div className="head">

                <h1>Todo List</h1>
                <input type="text" placeholder="Enter Todo" onChange={setvalue} value={input} />
                <button onClick={Listofitem}> +</button>

                <ol>
                    {items.map((item) => {
                        // return <li>{item}</li>
                      return<Todolist text = {item}/>
                    })}
                </ol>

            </div>

        </div>
    )
}
export default Todo;
