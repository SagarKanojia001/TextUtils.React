import React, {useState} from 'react'

export default function TextForm(props) {
              function handleUpClick() {
                            let newText = text.toUpperCase()
                            setText(newText)
                            props.showAlert("converted into upperCase", "success")
              }
              function handleLoClick() {
                            let newText = text.toLowerCase()
                            setText(newText)
                            props.showAlert("converted into LowerCase", "success")
              }
             
              function handleClearClick() {
                           setText("")
                           props.showAlert("Text cleared", "success")
               }
             
              
              function handleOnChange(event){
                            setText(event.target.value)
              }
              const [text, setText] = useState("")

      
           

  return (
    <>
    <div className="container" style={{color : props.mode==="dark"?"white":"#042743"}}  >
    <h2 >{props.heading}</h2>
   
   <div className="form-group" >
    <textarea className="form-control" id="my-box " rows="8" value={text} onChange={handleOnChange} ></textarea>
  </div>
    </div>
    <button className="btn btn-primary btn-dark my-3 mx-2"   onClick={handleUpClick}>convert to UpperCase..</button>
    <button className="btn btn-primary btn-dark my-3 mx-2"   onClick={handleLoClick}>convert to LowerCase..</button>
    <button className="btn btn-primary btn-dark my-3 mx-2"   onClick={handleClearClick}>Clear..</button>
        <div className="container" style={{color : props.mode==="dark"?"white":"#042743"}}>
              <h2 >About character</h2>
              <p ><b>{text.split(" ").length} words and {text.length} character</b></p>
              <h2 >Preview...</h2>
              <p >{text}</p>
    </div>
    
    </>
  )
}
