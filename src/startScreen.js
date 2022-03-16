export default function Start({pergunta}) {
    function changePage(){
        let page_question = document.querySelector('.page-question');
        let page_start = document.querySelector('.page-start');

        page_question.classList.remove('hide');
        page_start.classList.add('hide');
    }
    return (
        <>
            <div className="page page-start">
                <div className="logo-start">
                    <img src="img/logo.png" alt="logo do jogo" />
                    <h1>ZapReacall</h1>
                </div>
                <button className="button-start" onClick={changePage}>Iniciar Recall!</button>
            </div>

            <div className="page page-question hide">
                <div className="logo-question">
                    <img src="img/logo.png" alt="logo do jogo" />
                    <h1>ZapReacall</h1>
                </div>
                <div className="question">
                    <h1>pergunta 1</h1>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="question">
                    <h1>pergunta 1</h1>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="question">
                    <h1>pergunta 1</h1>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
                <div className="question">
                    <h1>pergunta 1</h1>
                    <ion-icon name="play-outline"></ion-icon>
                </div>
            </div>
        </>
    )
}