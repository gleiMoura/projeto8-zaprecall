import React from 'react';
import Question from "./../question/index";
import Logo from "./../assets/logo.png";
import "./style.css";
import dice from "../dice";

export default function Deck() {
    let list = [];
    const [answers, setAnswers] = React.useState([]);
    function ResultIcons(name){
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

    function putFlashcards(){
        if(list.length === 0){
            dice.sort((a,b) => Math.random() - 0.5);
            list = [...dice];
            return(
                list.map(data => < Question 
                number={list.indexOf(data) + 1}
                content_question={data.content} 
                complement = {data.complement} 
                setAnswers = {setAnswers}
                answers = {answers} />)
            )
        }else{
            return(
                list.map(data => < Question 
                number={list.indexOf(data) + 1} 
                content_question={data.content} 
                complement = {data.complement}
                setAnswers = {setAnswers}
                answers = {answers} />)
            )
        }
    }

    const flashcards = putFlashcards();

    return (
        <>
            <div className="Deck">
                <header>
                    <div className="logo-question">
                        <img src={Logo} alt="logo do jogo" />
                        <h1> ZapReacall </h1>
                    </div>
                </header>
                <main>
                    <div className="questions" >
                       {flashcards}
                    </div>
                </main>
                <footer>
                    <p>{answers.length}/{list.length} Concluídos</p>
                    <div className='foot-icon'>
                        {answers.map(element => {
                            return(
                                <div class = {element}>
                                    {
                                        ResultIcons(element)
                                    }
                                </div>
                            )
                        })}
                    </div>
                </footer>
            </div>
        </>
    )
}