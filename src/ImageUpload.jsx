import React, { useRef, useState } from 'react'

function ImageUpload() {

const [fileUrl, setFileUrl] = useState();

const imageRef  = useRef(null);//does not rerenders
const [num, setNum] = useState(0)

//temporary URL's
function handleImagePreview(e) {
    console.log(e.target.files[0]);
    const res =URL.createObjectURL(e.target.files[0])
    setFileUrl(res)
console.log(res);
}


  return (
    <div>
        <img src={fileUrl} />
        <input style={{display:'none'}} ref={imageRef} type='file' onChange={e=>handleImagePreview(e)} />

<button onClick={()=>setNum(num+1)}>+1</button>
        <button onClick={()=>imageRef.current.click()} style={{background:'black',color:'white'}}>Image upload btn</button>
    </div>
  )
}

export default ImageUpload