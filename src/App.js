import logo from './logo.svg';
import './App.css';
import TextForm from './components/TextForm'
import React, {useState} from 'react'
import Navbar from './components/Navbar';
import Alert from './components/Alert';
function App() {
  const [mode, setMode] = useState('light')
  function toggleMode (){
                  if (mode === "light") {
                      setMode("dark")
                      document.body.style.backgroundColor = "#042743"
                      showAlert("Dark mode has been enabled", "success")
                      document.title = "TextUtils - Dark Mode"
                      
                  }
                  else{
                                setMode("light")
                                document.body.style.backgroundColor = "#ffff"
                                showAlert("light mode has been enabled", "success")
                                document.title = "TextUtils"
                                       
                  }
                 }
                 function greyMode (){
                  if (mode === "light") {
                      setMode("dark")
                      document.body.style.backgroundColor = "#EEEEEE"
                      showAlert("grey mode has been enabled", "success")
                      document.title = "TextUtils - grey Mode"
                      
                  }
                  else{
                                setMode("light")
                                document.body.style.backgroundColor = "#ffff"
                                showAlert("light mode has been enabled", "success")
                                document.title = "TextUtils"
                                       
                  }
                 }
                 function blueMode (){
                  if (mode === "light") {
                      setMode("dark")
                      document.body.style.backgroundColor = "#BAD7E9"
                      showAlert("blue mode has been enabled", "success")
                      document.title = "TextUtils - blue Mode"
                      
                  }
                  else{
                                setMode("light")
                                document.body.style.backgroundColor = "#ffff"
                                showAlert("light mode has been enabled", "success")
                                document.title = "TextUtils"
                                       
                  }
                 }
                 function orangeMode (){
                  if (mode === "light") {
                      setMode("dark")
                      document.body.style.backgroundColor = "#FDD36A"
                      showAlert("orange mode has been enabled", "success")
                      document.title = "TextUtils - Orange Mode"
                      
                  }
                  else{
                                setMode("light")
                                document.body.style.backgroundColor = "#ffff"
                                showAlert("light mode has been enabled", "success")
                                document.title = "TextUtils"
                                       
                  }
                 }
  const [alert, SetAlert] = useState(null)
  const showAlert = (message, type)=> {
      SetAlert({
        msg:message,
        type:type
      })
      setTimeout( () => {
        SetAlert(null)
      }, 1500)
  }

  return (
    <>
    
    <Navbar mode={mode} toggleMode={toggleMode} greyMode={greyMode} blueMode={blueMode} orangeMode={orangeMode} />
    <Alert alert={alert} />
      <div className="container my-3">
      <TextForm heading = "Enter the text below for analysing" mode={mode} showAlert={showAlert}/>
     </div>
     
     </>
  );
}

export default App;
