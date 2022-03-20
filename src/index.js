import ReactDOM from 'react-dom';
import React from 'react';
import Question from './question'

const dice = [
    { number: "Pergunta 1", content: "O que é JSX" },
];

function Start() {
    const [selected, setSelected] = React.useState(true);
    const state_page_two = `page page-two ${selected ? "hide" : ""}`;
    const state_page_one = `page page-one ${selected ? "" : "hide"}`
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
                <section className = "questions">
                    {dice.map(data => <Question number_question={data.number} content_question={data.content} />)}
                </section>
            </main>

            <footer>
        
            </footer>
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