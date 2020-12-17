import React from 'react'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import RedoIcon from '@material-ui/icons/Redo';
import PublicIcon from '@material-ui/icons/Public';

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faThumbsUp,faComment ,faShare} from '@fortawesome/free-solid-svg-icons'
// import AddIcon from '@material-ui/icons/Add';


function Facebook(props) {
    const  date=  new Date().toLocaleDateString()

    return (

        // <div style={{ width: "100%",  display: 'flex', justifyContent: 'center'}}>
        //     <div class="p-3 mb-2">

 

        //         <div  className="card promoting-card " style={{ width: "100%" }}>
        //             <div className="card-body d-flex flex-row">
        //                 <img src={props.data.profile} className="rounded-circle mr-3" height="80px" width="80px" alt="avatar" />
        //                 <div>
        //                     <h4 className="card-title text-center font-weight-bold mb-2 text-capitalize">{props.data.name}</h4>

        //                     <p className="card-text"><i className="far fa-clock pr-2" />{date}{<PublicIcon/>}</p>
        //                 </div>
        //             </div>

        //             <div className="view overlay">
        //                 <img style={{ width: '770px', height: '400px' }} className="card-img-top rounded-0" src={props.data.img} alt="Card image cap" />

        //             </div>
        //             <hr style={{backgroundColor:"black"}}/>
        //             <div className="my-2 " style={{margin: "2px", alignItems: 'center',color:"white" }}>
        //                 <span> <button  style={{ color: "black", marginRight: "60px", width: '190px', height: '50px', fontWeight: 'bold', backgroundColor: 'transparent', border: 'none' }}><ThumbUpIcon />Like</button></span>
        //                 <span ><button  style={{ color: "black", marginRight: "60px", width: '190px', height: '50px', fontWeight: 'bold', backgroundColor: 'transparent', border: 'none' }}> <ModeCommentIcon />Comments</button></span>
        //                 <span> <button style={{ color: "black", marginRight: "60px", width: '190px', height: '50px', fontWeight: 'bold', backgroundColor: 'transparent', border: 'none' }}> <RedoIcon />Share</button></span>
        //                 {/* <button style={{margin : "2px" ,width: '330px' ,height:'50px' ,fontWeight:'bold',backgroundColor:'transparent' ,border:'none'}}>Comments</button> */}
        //                 {/* <button style={{margin : "2px" ,width: '220px' ,height:'50px' ,fontWeight:'bold',backgroundColor:'transparent',border:'none'}}>Share</button> */}




        //             </div>

        //         </div>

        //     </div>
        // </div>

<div  style={{ width: "100%",  display: 'flex', justifyContent: 'center'}}>
  <div className="card promoting-card" style={{ width: "60%",backgroundColor:"black" ,marginTop:"20px"}}>
  <div className="card-body d-flex flex-row">
    <img src={props.data.profile} className="rounded-circle mr-3" height="50px" width="50px" alt="avatar" />
    <div>
      <h4 className="card-title font-weight-bold mb-2 text-capitalize text-white">{props.data.name}</h4>
      <p className="card-text  text-white"><i className="far fa-clock pr-2" />{date}</p>
    </div>
      {/* <p className="card-text collapse" id="collapseContent">{props.data.text}</p> */}
  </div>
  <div>
      <p className="card-title font-weight-bold mb-2 mt-4 mx-5 text-capitalize  text-white">{props.data.text}</p>
    </div>


  <div className="view overlay">
    <img className="card-img-top rounded-0" src={props.data.img} alt="Card image cap" />
    <a href="#!">
    </a>
  </div>
  <div className="my-2 " style={{margin: "2px", alignItems: 'center',color:"white" ,marginLeft:"50px"}}>
                   <span> <button  style={{ color: "white", marginRight: "60px", width: '190px', height: '50px', fontWeight: 'bold', backgroundColor: 'transparent', border: 'none' }}><ThumbUpIcon />Like</button></span>
                  <span ><button  style={{ color: "white", marginRight: "60px", width: '190px', height: '50px', fontWeight: 'bold', backgroundColor: 'transparent', border: 'none' }}> <ModeCommentIcon />Comments</button></span>
                     <span> <button style={{ color: "white", marginRight: "60px", width: '190px', height: '50px', fontWeight: 'bold', backgroundColor: 'transparent', border: 'none' }}> <RedoIcon />Share</button></span>
                    {/* <button style={{margin : "2px" ,width: '330px' ,height:'50px' ,fontWeight:'bold',backgroundColor:'transparent' ,border:'none'}}>Comments</button> */}
                     {/* <button style={{margin : "2px" ,width: '220px' ,height:'50px' ,fontWeight:'bold',backgroundColor:'transparent',border:'none'}}>Share</button> */}




             </div>
</div>

</div>
    )
}
export default Facebook;