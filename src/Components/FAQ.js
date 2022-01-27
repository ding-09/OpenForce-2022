import React from 'react'
import "./styles/FAQnew.css"

export default function FAQnew(props) {

    const changeState = ()=>{
        const btn = document.getElementById("expand"+props.index);

        if(btn.innerHTML === "-"){
            document.getElementById("answer"+props.index).style.padding="0px";
            document.getElementById("answer"+props.index).style.height = "0px";
            btn.innerHTML="+";
        }else{
            document.getElementById("answer"+props.index).style.padding="20px";
            document.getElementById("answer"+props.index).style.height = document.getElementById("answer"+props.index).scrollHeight+"px";
            btn.innerHTML="-";
        }

    }

    return (
        <div className='faqcont'>
            <div className='faqque'>
                <div className='stateHolder' id={"expand"+props.index} onClick={changeState}>+</div>
                <div className='faqSubque'>{props.faq.question}</div>
            </div>
            <div id={"answer"+props.index} className='faqans'><div>{props.faq.answer}</div><div>{props.faq.option2}</div><div>{props.faq.option3}</div></div>
        </div>
    )
}
