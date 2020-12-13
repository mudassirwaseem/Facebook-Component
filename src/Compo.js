import React, { useState } from 'react'
import Facebook from './Facebook'

function Facebook1() {
    const [handle, sethandle] = useState({ name: "", profile: "", img: "" })
    const [posts, setposts] = useState([])

    const Set = () => {
        setposts([...posts, handle])
        sethandle({ name: "", profile: "", img: "" })
    }
    return (
        <div>
            {console.log(posts)}

            <div style={{ width: "100%", display: "flex", flexDirection: 'column', alignItems: "center", margin: "30px", justifyContent: "center" }}>
                <div className="form-group" style={{width: "80%"}}>
                    <label htmlFor="exampleInputEmail1" > ID NAME </label>
                    <input value={handle.name} onChange={e => sethandle({ ...handle, name: e.target.value })} type="email" className="form-control text-start" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" />
                </div>
                <div className="form-group" style={{width: "80%"}}>
                    <label htmlFor="exampleInputEmail1">PIC URL</label>
                    <input value={handle.profile} onChange={e => sethandle({ ...handle, profile: e.target.value })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter PIC URL " />
                </div>
                <div className="form-group" style={{width: "80%"}}>
                    <label htmlFor="exampleInputEmail1">POST URL</label>
                    <input value={handle.img} onChange={e => sethandle({ ...handle, img: e.target.value })} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter POST URL" />
                </div>
            </div>

{/* 
            <input value={handle.name} onChange={e => sethandle({ ...handle, name: e.target.value })} />
            <input value={handle.profile} onChange={e => sethandle({ ...handle, profile: e.target.value })} />
            <input value={handle.img} onChange={e => sethandle({ ...handle, img: e.target.value })} /> */}
            {/* <input value={handle.email} onChange={e => sethandle({ ...handle, email: e.target.value })} /> */}
            {/* <button onClick={Set}>Submit</button> */}
            <button  onClick={Set} type="button" className="btn btn-primary text-center " style={{width:"100px",marginLeft:"1160px"}}>Post Now</button>

            {posts.map(data => <Facebook data={data} />)}

            {/* <h2>your name is {handle.name}</h2>
            <h2>your email is {handle.email}</h2> */}
            
        </div>
    )

}
export default Facebook1;