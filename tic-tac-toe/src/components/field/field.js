import React, {Component} from 'react';
import Cell from '../cell/cell.js';
import './field.css';

class Field extends Component {
    
    state = {
        count: 9
    }
    
    render () {
        return (
            <div className="field">
                {this.renderCells()}
            </div>
        );
    }
    
    renderCells () {
        let indents = [];
        for (let i = 1; i <= this.state.count; i++) {
          indents.push(<Cell key={"cell" + i} />);
        }
        return indents;
    }
}

export default Field;