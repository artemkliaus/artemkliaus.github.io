import React, {Component} from 'react';
import Field from '../field/field.js';

class Intro extends Component {

    render () {
        let choose;

        return (
            <div>
                    {this.showIntoPopup(choose)}
                    <Field val={choose} />
            </div>
        );
    }

    showIntoPopup (choose) {

        do {
            choose = prompt('Zero or cross?', 'zero');
        } while (choose != "zero" && choose != "cross");
        console.log(choose);
    }
}

export default Intro;
