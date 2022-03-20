import React from 'react';

export default function Question({ number_question, content_question }) {
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
                <ion-icon name="checkmark-circle-outline"></ion-icon>
            )
        }
        if(name === 'color-orange'){
            return(
                <ion-icon name="close-circle" ></ion-icon>
            )
        }
        if(name === 'color-green'){
            return(
                <ion-icon name="help-circle" ></ion-icon>
            )
        }
    }

    let result = `hide`;
    if((name === 'color-red')||
        (name === 'color-orange')||
        (name === 'color-green')){
            result = 'question result';
            options = 'hide'
        }

    return (
        <>
            <section className={question}>
                <h1>{number_question}</h1>
                <ion-icon name="play-outline" onClick={() => setSelected(!selected)}></ion-icon>
            </section>

            <section className={content}>
                <p>{content_question}</p>
                <img src="img/setinha.png" onClick={() => setSelected_options(!selected_options)} />
            </section>

            <section className={options}>
                <p>conteudo aqui dentro {name}</p>
                <div className='choice'>
                    <div className="option option-one" onClick={() => setName('color-red')}>
                        Não Lembrei
                    </div>

                    <div className='option option-two' onClick={() => setName('color-orange')}>
                        Quase Não lembrei
                    </div>

                    <div className='option option-three' onClick={() => setName('color-green')}>
                        Zap!
                    </div>
                </div>
            </section>
            <section className = {result}>
                <h1 className = {name}>{number_question}</h1>
                <div className = {name}>
                    <ResultIcons/>
                </div>
            </section>
        </>
    )
}

