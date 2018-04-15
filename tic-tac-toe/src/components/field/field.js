import React, {Component} from 'react';
import Cell from '../cell/cell.js';
import './field.css';

class Field extends Component {

    state = {
        count: 9,
        cells: Array(9).fill(null),
        choice: this.props.val,
        compChoice : (this.props.val === 'O') ? 'X' : 'O',
        round: 0
    }

    render () {

        return (
            <div>
                <h2 className="title">Now turn is: {this.state.choice}</h2>
                <div className="field">
                    {this.renderCells(this.state.choice)}
                </div>
            </div>
        );
    }

    renderCells (choice) {
        let arr = [];
        for (let i = 0; i < this.state.count; i++) {
          arr.push(<Cell
                            key = {"cell" + i}
                            value = {this.state.cells[i]}
                            onClick = { () => this.clickHandler(i)} />
                        );
        }
        return arr;
    }

    clickHandler (i) {
        const cells = this.state.cells.slice('');
        let round = this.state.round;
        cells[i] = this.state.choice;
        round += 1;
        this.compProgress(cells, round);
        this.setState({cells: cells, round: round});
    }

    compProgress (cells, round) {
        if (!cells[4]) {
            cells[4] = this.state.compChoice;
        } else {
            if (round === 1) {
                let random = 0;
                do {
                    random = parseInt(Math.random() * 10);
                } while (random === 9 || random === 4)

                cells[random] = this.state.compChoice;
            } else {
                this.runAlgorithm(cells);
            }
        }

        return cells;
    }

    runAlgorithm (cells) {
        const user = this.state.choice;
        const comp = this.state.compChoice;
        let userCells = [];
        let compCells = [];
        let emptyCells = [];
        let board = [];
        cells.forEach((item, i) => {
            if (item !== null) {
                (item === user) ? board.push(user) : board.push(comp)
            } else {
                emptyCells.push(i);
                board.push(i);
            }
        });
        // console.log(userCells, '||', compCells, '||', emptyCells);
        console.log(board);
        compTurn(board);

    }

    minimax(reboard, player) {
        iter++;
        let array = avail(reboard);

        if (winning(reboard, huPlayer)) {
            return { score: -10 };
        } else if (winning(reboard, aiPlayer)) {
            return { score: 10 };
        } else if (array.length === 0) {
            return { score: 0 };
        }

        let moves = [];

        for (let i = 0; i < array.length; i++) {
            let move = {};
            move.index = reboard[array[i]];
            reboard[array[i]] = player;

            if (player == aiPlayer) {
                let g = minimax(reboard, huPlayer);
                move.score = g.score;
            } else {
                let g = minimax(reboard, aiPlayer);
                move.score = g.score;
            }

            reboard[array[i]] = move.index;
            moves.push(move);
        }

        let bestMove;
        if (player === aiPlayer) {
            let bestScore = -10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score > bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        } else {
            let bestScore = 10000;
            for (let i = 0; i < moves.length; i++) {
                if (moves[i].score < bestScore) {
                    bestScore = moves[i].score;
                    bestMove = i;
                }
            }
        }

        return moves[bestMove];
}

    compTurn (board) {
        board.forEach((el, i) => {
            if (el)
        })
    }

    availableSpots (board) {
        return  board.filter(s => s != "O" && s != "X");
    }

    winning (board, player) {
     if (
            (board[0] == player && board[1] == player && board[2] == player) ||
            (board[3] == player && board[4] == player && board[5] == player) ||
            (board[6] == player && board[7] == player && board[8] == player) ||
            (board[0] == player && board[3] == player && board[6] == player) ||
            (board[1] == player && board[4] == player && board[7] == player) ||
            (board[2] == player && board[5] == player && board[8] == player) ||
            (board[0] == player && board[4] == player && board[8] == player) ||
            (board[2] == player && board[4] == player && board[6] == player)
            ) {
            return true;
        } else {
            return false;
        }
    }





}





export default Field;
