import ReactDOM from 'react-dom';
import React from 'react';

const dice = [
    { number: "Pergunta 1", content: "O que é JSX", ansewer: "Uma extensão de linguagem do JavaScript" },
    { number: "Pergunta 1", content: "O React é __ ", ansewer: "uma biblioteca JavaScript para construção de interfaces"},
    { number: "Pergunta 1", content: " Componentes devem iniciar com __", ansewer: "letra maiúscula"},
    { number: "Pergunta 1", content: "Podemos colocar __ dentro do JSX", ansewer: "expressões" },
    { number: "Pergunta 1", content: "O ReactDOM nos ajuda __" , ansewer: "interagindo com a DOM para colocar componentes React na mesma"},
    { number: "Pergunta 1", content: "Usamos o npm para __" , ansewer: "gerenciar os pacotes necessários e suas dependências"},
    { number: "Pergunta 1", content: " Usamos props para __" , ansewer: " passar diferentes informações para componentes "},
    { number: "Pergunta 1", content: " Usamos estado (state) para __" , ansewer: "dizer para o React quais informações quando atualizadas devem renderizar a tela novamente"},
];   


function Start() {
    const [selected, setSelected] = React.useState(true);
    const state_page_two = `page page-two ${selected ? "hide" : ""}`;
    const state_page_one = `page page-one ${selected ? "" : "hide"}`;

    return (
        <>
            <div className={state_page_one}>
                <div className="logo-start">
                    <img src="img/logo.png" alt="logo do jogo" />
                    <h1>ZapReacall</h1>
                </div>
                <button className="button-start" onClick={() => setSelected(!selected)}>Iniciar Recall!</button>
            </div>

            <main className={state_page_two}>
                <div className="logo-question">
                    <img src="img/logo.png" alt="logo do jogo" />
                    <h1>ZapReacall</h1>
                </div>
                <div className="questions">
                    {dice.map(data => <Question number_question={data.number} content_question={data.content} answer = {data.ansewer}/>)}
                </div>
            </main>
        </>
    )
}

function Question({ number_question, content_question, answer }) {

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

    function Foot(){
        return(
            <footer>
                <p>0/4 concluídos</p>
            </footer>
        )
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
                <h1>{number_question}</h1>
                <ion-icon name="play-outline" onClick={() => setSelected(!selected)}></ion-icon>
            </section>

            <section className={content}>
                <p>{content_question}</p>
                <img src="img/setinha.png" onClick={() => setSelected_options(!selected_options)} />
            </section>

            <section className={options}>
                <p>{answer}</p>
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



function App() {
    return (
        <>
            <Start />
        </>
    )
}
const divRoot = document.querySelector('.root')

ReactDOM.render(<App />, divRoot)