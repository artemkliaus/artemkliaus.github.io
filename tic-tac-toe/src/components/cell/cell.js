import React, {Component} from 'react';
import './cell.css';

class Cell extends Component {
    
    state = {
        isEmpty: true
    }
    
    
    render() {
        const text = !this.state.isEmpty && 'X';
        return (
            <div className="cell" onClick={this.clickHandler} key={this.props.key}>{text}</div>
        )
    }
    
    clickHandler = () => {
        this.setState(prevState => ({
           isEmpty: !prevState.isEmpty
        }))
    }
}


export default Cell;