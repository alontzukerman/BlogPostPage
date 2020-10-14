import React , { useEffect , useRef } from 'react'
import './Form.css';


function Form({submitComment}) {

    const nameRef = useRef(null);
    const contentRef = useRef(null);
    const submitRef = useRef(null);

    function nameKeyDowm(e) {
        if(e.keyCode === 13)
            contentRef.current.focus();
    }
    function contentKeyDowm(e) {
        if(e.keyCode === 13)
            submitRef.current.focus();
    }
    function submitKeyDowm(e) {
        console.log(e.keyCode);
        if(e.keyCode === 13){
            let newComment = {
                name: nameRef.current.value,
                content: contentRef.current.value
            };
            contentRef.current.value = '';
            submitComment(newComment);
            contentRef.current.focus();
        }
    }
        
    return (
        <div className="Form">
            <div id="formTitle">LEAVE YOUR COMMENT HERE</div>
            <input id="nameInput" onKeyDown={nameKeyDowm} ref={nameRef} placeholder="Name"></input>
            <input id="contentInput" onKeyDown={contentKeyDowm} ref={contentRef} placeholder="content"></input>
            <button id="submitButton" onKeyDown={submitKeyDowm} ref={submitRef}>Submit</button>
        </div>
    )
}

export default Form ;
