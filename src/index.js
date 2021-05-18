import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

// pass a callback function to screen so the screen can change states
function CalculatorButton(props){
    return (
        <button className={props.className} onClick={()=>{props.action(props.symbol)}}>
            {props.symbol}
        </button>
    )
}

function Screen(props){
    return (
        <div className="screen">
            <div className="prev-display">
                {props.prevContent}
            </div>
            <div className="current-display">
                {props.currentContent}
            </div>
        </div>
    )
}

class Calculator extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            content:'',
        };
        this.clearDisplay = this.clearDisplay.bind(this)
        this.addToDisplay = this.addToDisplay.bind(this)
        this.deleteCharacter = this.deleteCharacter.bind(this)
        this.equals = this.equals.bind(this)
    }

    clearDisplay(blank){
        this.setState({content:''})
    }

    addToDisplay(symbol){
        let newContent = this.state.content;
        newContent += symbol;
        this.setState({content: newContent})
    }

    deleteCharacter(blank){
        let newContent = this.state.content.slice(0, -1);
        this.setState({content: newContent})
    }

    equals(blank){

    }

    render(){
        return(
            <div className="grid">
                <Screen prevContent="123" currentContent={this.state.content}></Screen>
                <CalculatorButton className="all-clear" symbol="AC" action={this.clearDisplay}></CalculatorButton>
                <CalculatorButton className="delete" symbol="DEL" action={this.deleteCharacter}></CalculatorButton>
                <CalculatorButton className="op" symbol="/" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="num-data" symbol="7" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="num-data" symbol="8" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="num-data" symbol="9" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="op" symbol="*" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="num-data"  symbol="4" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="num-data"  symbol="5" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="num-data"  symbol="6" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="op" symbol="+" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="num-data"  symbol="1" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="num-data"  symbol="2" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="num-data"  symbol="3" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="op" symbol="-" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="num-data"  symbol="." action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="num-data"  symbol="0" action={this.addToDisplay}></CalculatorButton>
                <CalculatorButton className="equals" symbol="=" action={this.equals}></CalculatorButton>
            </div>
        )
    }
}

ReactDOM.render(<Calculator></Calculator>, document.getElementById('root'))