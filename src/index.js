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
        super(props);
        this.state = {
            content:'',
        };
        this.clearDisplay = this.clearDisplay.bind(this);
        this.addToDisplay = this.addToDisplay.bind(this);
        this.deleteCharacter = this.deleteCharacter.bind(this);
        this.equals = this.equals.bind(this);
        this.opList = ['+','-','*','/'];
        this.opPosition = 0;
    }

    clearDisplay(blank){
        this.opPosition = 0;
        this.setState({content:''})
    }

    addToDisplay(symbol){
        let newContent = this.state.content;
        let length = newContent.length;
        console.log(typeof newContent);

        if (symbol === '-'){
            //case: -
            if(length === 0){
            //case number-
            } else if (!isNaN(newContent[length-1]) && !this.opPosition){
                this.opPosition = length;
            // case: number--
            } else if(this.opPosition === length-1){
                //allow
            } else{
                return;
            }
            newContent += symbol;
            this.setState({content: newContent});
            return;
        }

        if(this.opList.includes(symbol)){
            if(length > 0 && !isNaN(newContent[length-1]) && !this.opPosition){
                this.opPosition = length;
            } else{
                return 
            }
        }

        newContent += symbol;
        this.setState({content: newContent});
    }

    deleteCharacter(blank){
        if (this.state.content.length > 0){
            let newContent = this.state.content.slice(0, -1);
            this.setState({content: newContent})
        }
    }

    equals(blank){
        let content = this.state.content;
        if (content.length >= 3){
            if (this.opPosition && !isNaN(content[content.length-1])){
                let arg1 = parseFloat(content.slice(0,this.opPosition));
                let arg2 = parseFloat(content.slice(this.opPosition+1,content.length));
                let op = content[this.opPosition];
                let result;
                switch (op){
                    case '+':
                        result =  arg1 + arg2;
                        break;
                    case '-':
                        result = arg1 - arg2;
                        break;
                    case '*':
                        result =  arg1 * arg2;
                        break;
                    case '/':
                        result = arg1 / arg2;
                        break;
                    default:
                        console.log('impossible');
                }

                result = result.toString();
                this.opPosition = 0;
                this.setState({content: result})
            }
        }
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

ReactDOM.render(<Calculator></Calculator>, document.getElementById('root'));