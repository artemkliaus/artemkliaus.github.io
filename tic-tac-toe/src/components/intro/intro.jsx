import React, {Component} from 'react';
import Field from '../field/field.js';

class Intro extends Component {

    render () {
        let choice = this.showIntoPopup();

        return (
            <div>
                    <Field val={choice} />
            </div>
        );
    }

    showIntoPopup () {
        let choice;
        do {
            choice = prompt('Zero or cross?', 'zero');
        } while (choice !== "zero" && choice !== "cross");
        console.log(choice);

        return (choice === 'zero') ? 'O' : 'X';
    }
}

export default Intro;
