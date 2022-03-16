import ReactDOM from 'react-dom';
import Start from './startScreen'

function App(){
    return(
        <>
            <Start />
        </>
    )
}

const divRoot = document.querySelector('.root')

ReactDOM.render(<App/>, divRoot)