import React,{ useContext, useEffect }  from 'react'
import './styles/AddSession.css'
import BaseContext from '../Context/BaseContext';

const addSession = async e=>{
    const alert = () =>{};
    e.preventDefault();
    const sessionname = document.getElementById('sessionname').value;
    const sessionposition = document.getElementById('sessionposition').value;
    const sessiondescription = document.getElementById('sessiondescription').value;
    let sessionhost = document.getElementById('sessionhost').value;
    const sessionimage = document.getElementById('sessionimage');
    const sessiondate = document.getElementById('sessiondate').value ;
    const reader = new FileReader();
    sessionhost=sessionname;
    if(!sessionimage.files[0]){
        alert("error",`Enter an image file`);
        return;
    }
    reader.readAsDataURL(sessionimage.files[0]);
    reader.onload = async ()=>{
        const imageData = reader.result;
        const body = {
            "organiser" : {"name":sessionname,"host":sessionhost,"position":sessionposition},
            "description" : sessiondescription,
            "image" : imageData,
            "time" : new Date(sessiondate),
        }
        const res = await fetch('http://localhost:5000/api/session/',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(body)
        }) 
        const data = await res.json();
        alert("success",`Succesfully book with id ${data.sessionId}`);
    }

}
function AddSession() {
    useEffect(()=>{
        const sessionimage = document.getElementById('sessionimage');
        const reader = new FileReader();
        window.addEventListener('change',()=>{
            if(!sessionimage.files[0]){
                return;
            }
            reader.readAsDataURL(sessionimage.files[0]);
            reader.onload = async ()=>{
                const imageData = reader.result;
                document.getElementById('testimg').src=imageData;
            }
        })
    },[])
    return (
        <div id="AddSession">
            <form action="" id="AddSessionForm" onSubmit={addSession}>
                <div className="form-top">
                    <div className="form-left">
                        <input type="text" id="sessionname" placeholder='name'/>
                        <input type="text" id="sessionhost" placeholder='host'/>
                        <input type="text" id="sessionposition" placeholder='position'/>
                        <input type="text" id="sessiondate" placeholder='date'/>
                    </div>
                    <div className="form-right">
                        <input type="file" id="sessionimage" accept='image/*' placeholder='image-url'/>
                        <input type="description" id="sessiondescription" placeholder='description'/>
                    </div>
                </div>
                <input type="submit" value="submit" />
            </form>
            <img src="" alt="" id="testimg" style={{height:"50vh"}}/>
        </div>
    )
}

export default AddSession
