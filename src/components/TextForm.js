import React from 'react';
import { useState } from 'react';

export default function TextForm(props) {
const [text, setText]=  useState('');

let handleText=()=>{
    // console.log('YOu have clicked'+ text);
    let newText = text.toUpperCase()
    setText (newText)
    props.showAlert('converted to uppercase','success')
};
let handleTextNOrmal=()=>{
    let newText2 = text.toLowerCase()
    setText (newText2)
    props.showAlert('converted to Lowercase','success')
};

// textarea m onchange naam ka add listener use karna hoga jisse ye use nahi karenge toh hm textarea m kuch likh nahi payenge. 
const handleONchange =(event)=>{
    // console.log('on change')
    setText(event.target.value) //iska matlab hai ki jo value textarea m wo toh text k barabar ho jayegi toh hm setText ki help se jo text ki value h or jo hm or likhenge wo add ho jayegii..
}
    return (
        <>
        <div className='container' style ={{color : props.mode === 'dark'?'white':'black'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                {/* <label htmlFor="exampleFormControlTextarea1" className="form-label">Example textarea</label> */}
                <textarea className="form-control" value={text} onChange={handleONchange} style ={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode ==='dark'?'white':'black'} }  id="exampleFormControlTextarea1" rows="8"></textarea> {/* 'dark'?'grey':'white' means (dark mode hai toh grey kar dena warna ese white hi rende dena) */}
            </div>
            <button className="btn btn-primary mx-2" type="submit" onClick={handleText} >Convert into Uppercase</button>
            <button className="btn btn-primary mx-3" type="submit" onClick={handleTextNOrmal} >Convert into Lowercase</button>
        </div>
        <div className="container" style ={{color : props.mode === 'dark'?'white':'black'}}>
            <h2>Your Text Summary</h2>
            <p>{text.split(" ").length} words and {text.length  } characters.</p>
            <p>{0.008 * text.split(" ").length}read minutes</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Enter something in the textbox"}</p>
        </div>
        </>
    );
}


