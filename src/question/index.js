import React from 'react';
import "./style.css"
import Setinha from "./../assets/setinha.png"

export default function Question({number,content_question, complement, answers, setAnswers}) {

    const [selected, setSelected] = React.useState(true);
    const question = `question ${selected ? "" : "hide"}`;
    let content = `content ${selected ? "hide" : ""}`;

    const [selected_options, setSelected_options] = React.useState(true);
    if (selected === false) {
        content = `content ${selected_options ? "" : "hide"}`;
    }
    let options = `options ${selected_options ? "hide" : ""}`;

    const [name, setName] = React.useState('')
    function ResultIcons(){
        if(name === ""){
            return(
                <>
                </>
            )
        }
        if(name === 'color-red'){
            return(
                <ion-icon name="close-circle" ></ion-icon>
            )
        }
        if(name === 'color-orange'){
            return(
                <ion-icon name="help-circle" ></ion-icon>
            )
        }
        if(name === 'color-green'){
            return(
                <ion-icon name="checkmark-circle-outline"></ion-icon>
            )
        }
    }

    let result = `hide`;
    if((name === 'color-red')||
        (name === 'color-orange')||
        (name === 'color-green')){
            result = 'question result';
            options = 'hide';
    }
    
    return (
        <>
            <section className={question}>
                <h1> Pergunta {number}</h1>
                <ion-icon name="play-outline" onClick={() => setSelected(!selected)}></ion-icon>
            </section>

            <section className={content}>
                <p>{content_question}</p>
                <img src={Setinha} onClick={() => setSelected_options(!selected_options)} />
            </section>

            <section className={options}>
                <p>{complement}</p>
                <div className='choice'>
                    <div className="option option-one" onClick={() => {setName('color-red'); setAnswers([...answers, "color-red"])}}>
                        Não Lembrei
                    </div>

                    <div className='option option-two' onClick={() => {setName('color-orange'); setAnswers([...answers,"color-orange"])}}>
                        Quase Não lembrei
                    </div>

                    <div className='option option-three' onClick={() => {setName('color-green'); setAnswers([...answers, "color-green"])}}>
                        Zap!
                    </div>
                </div>
            </section>
            <section className = {result}>
                <h1 className = {name}>Pergunta {number}</h1>
                <div className = {name}>
                    <ResultIcons/>
                </div>
            </section>
        </>
    )
}
