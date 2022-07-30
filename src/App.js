// import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar'
import TextForm from './components/TextForm'
import About from './components/About'
import Alert from './components/Alert'
import {useState} from 'react'

function App() {
  const[mode,setmode]= useState('light');

  const [alert, setAlert] = useState('');

  const showAlert=(message, type)=>{
    setAlert({
      msg:message,
      type: type
    })
    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  let notoggleMode=()=>{
    setmode('light')
    document.body.style.backgroundColor ='white'
    showAlert('Dark mode has been disabled','primary')
  }
  let toggleMode=()=>{
    setmode('dark')
    document.body.style.backgroundColor ='#042743'
    showAlert('Dark mode has been enabled','primary')
  }

  let toggleMode2=()=>{
    setmode('dark')
    document.body.style.backgroundColor ='#6a0f0f'
    showAlert('Dark mode has been enabled','danger')
  }

  let toggleMode3=()=>{
    setmode('dark')
    document.body.style.backgroundColor ='#286117'
    showAlert('Dark mode has been enabled','success')
  }
  // let toggleMode=()=>{
  //   if(mode==='light'){
  //     setmode('dark')
  //     document.body.style.backgroundColor ='#042743'
  //     showAlert('Dark mode has been enabled','primary')
  //   }
  //   else{
  //     setmode('light')
  //     document.body.style.backgroundColor ='white'
  //     showAlert('Light mode has been enabled','primary')
  //   }
  // }
  // let toggleMode2=()=>{
  //   if(mode==='light'){
  //     setmode('dark')
  //     document.body.style.backgroundColor ='#6a0f0f'
  //     showAlert('Dark mode has been enabled','danger')
  //   }
  //   else{
  //     setmode('light')
  //     document.body.style.backgroundColor ='white'
  //     showAlert('Light mode has been enabled','danger')
  //   }
  // }
  // let toggleMode3=()=>{
  //   if(mode==='light'){
  //     setmode('dark')
  //     document.body.style.backgroundColor ='#286117'
  //     showAlert('Dark mode has been enabled','success')
  //   }
  //   else{
  //     setmode('light')
  //     document.body.style.backgroundColor ='white'
  //     showAlert('Light mode has been enabled','success')
  //   }
  // }

  return (
    <>
    
    <Navbar title="textUtils2" link="utils-link" mode={mode} toggleMode = {toggleMode} toggleMode2={toggleMode2} toggleMode3={toggleMode3} notoggleMode={notoggleMode}/>
    <Alert alert={alert}/>
    {/* <Navbar/> */}
    <div className="container my-3">
    <TextForm showAlert={showAlert} heading ="Type Text what you want" mode={mode}/>
    </div>
    {/* <About /> */}
    
    </>
  );
}

export default App;
