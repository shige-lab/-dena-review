import React, { useState } from "react";
import "./Game.css";
const Square = (props) => {
	return (
		<button className="square" onClick={props.onClick}>
			{props.value}
		</button>
	);
	//   return (
	// 	<button
	// 	  className="square"
	// 	  onClick={() => setState({value: state.count})}
	// 	>
	// 	  {state.value}
	// 	</button>
	//   );
};

const Board = () => {
	const initial = [
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
		[null, null, null, null, null, null, null],
	];
	const [squares, setSquares] = useState(initial);
	const [status, setStatus] = useState("Next player: ");
	const [isnext, setIsnext] = useState(true);
	let j = 0;

	const can_put = (square, col, row) => {
		for (let k = 5; k > col; k--) {
			if (square[k][row] == undefined) return false;
		}
		return true;
	};

	const handle_turn = (col, row) => {
		const square = squares.map((ary) => ary.slice());
		if (
			square[col][row] == null &&
			can_put(square, col, row) == true &&
			status != "Winner: "
		) {
			square[col][row] = isnext ? "X" : "O";
			setSquares(square);
			if (Board_Scan(col, row, square) == false) setIsnext(!isnext);
		}
	};

	const renderSquare = (j, i) => {
		return (
			<Square value={squares[j][i]} onClick={() => handle_turn(j, i)} />
		);
	};

	const Board_Scan = (x, y, square) => {
		let n = new Array(0, 0, 0, 0); //8方向（直線4本分）に並んだ数
		let move_x;
		let move_y;
		let i;

		move_x = 1;
		move_y = 1; //[＼]方向
		n[0] = Board_Scan_Sub(x, y, move_x, move_y, square);

		move_x = 0;
		move_y = 1; //[│]方向
		n[1] = Board_Scan_Sub(x, y, move_x, move_y, square);

		move_x = 1;
		move_y = 0; //[─]方向
		n[2] = Board_Scan_Sub(x, y, move_x, move_y, square);

		move_x = -1;
		move_y = 1; //[／]方向
		n[3] = Board_Scan_Sub(x, y, move_x, move_y, square);

		for (i = 0; i < 4; i++) {
			if (n[i] == 4) {
				setStatus("Winner: ");
				return true;
			}
		}
		return false;
	};

	const Board_Scan_Sub = (x, y, move_x, move_y, square) => {
		let n = 1;
		let i;

		for (i = 1; i < 5; i++) {
			if (
				x + move_x * i > 5 ||
				y + move_y * i > 6 ||
				x + move_x * i < 0 ||
				y + move_y * i < 0
			)
				break;
			if (square[x + move_x * i][y + move_y * i] == square[x][y]) n += 1;
			else break;
		}
		for (i = 1; i < 5; i++) {
			if (
				x + -1 * move_x * i < 0 ||
				y + -1 * move_y * i < 0 ||
				x + -1 * move_x * i > 5 ||
				y + -1 * move_y * i > 6
			)
				break;
			if (
				square[x + -1 * move_x * i][y + -1 * move_y * i] == square[x][y]
			)
				n += 1;
			else break;
		}

		return n;
	};

	return (
		<div>
			<div className="status">
				{status}
				{isnext ? "X" : "O"}
			</div>

			<div className="board-row">
				{renderSquare(j, 0)}
				{renderSquare(j, 1)}
				{renderSquare(j, 2)}
				{renderSquare(j, 3)}
				{renderSquare(j, 4)}
				{renderSquare(j, 5)}
				{renderSquare(j++, 6)}
			</div>
			<div className="board-row">
				{renderSquare(j, 0)}
				{renderSquare(j, 1)}
				{renderSquare(j, 2)}
				{renderSquare(j, 3)}
				{renderSquare(j, 4)}
				{renderSquare(j, 5)}
				{renderSquare(j++, 6)}
			</div>
			<div className="board-row">
				{renderSquare(j, 0)}
				{renderSquare(j, 1)}
				{renderSquare(j, 2)}
				{renderSquare(j, 3)}
				{renderSquare(j, 4)}
				{renderSquare(j, 5)}
				{renderSquare(j++, 6)}
			</div>
			<div className="board-row">
				{renderSquare(j, 0)}
				{renderSquare(j, 1)}
				{renderSquare(j, 2)}
				{renderSquare(j, 3)}
				{renderSquare(j, 4)}
				{renderSquare(j, 5)}
				{renderSquare(j++, 6)}
			</div>
			<div className="board-row">
				{renderSquare(j, 0)}
				{renderSquare(j, 1)}
				{renderSquare(j, 2)}
				{renderSquare(j, 3)}
				{renderSquare(j, 4)}
				{renderSquare(j, 5)}
				{renderSquare(j++, 6)}
			</div>
			<div className="board-row">
				{renderSquare(j, 0)}
				{renderSquare(j, 1)}
				{renderSquare(j, 2)}
				{renderSquare(j, 3)}
				{renderSquare(j, 4)}
				{renderSquare(j, 5)}
				{renderSquare(j++, 6)}
			</div>
		</div>
	);
};

class Game extends React.Component {
	render() {
		return (
			<div className="game">
				<div className="game-board">
					<Board />
				</div>
				<div className="game-info"></div>
			</div>
		);
	}
}

export default Game;
