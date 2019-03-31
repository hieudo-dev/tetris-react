export const tetrominoColors = {
	'O': "yellow",
	'T': "red",
	'T1': "red",
	'T2': "red",
	'T3': "red",
	'L': "blue",
	'L1': "blue",
	'L2': "blue",
	'L3': "blue",
	'Lr': "blue",
	'Lr1': "blue",
	'Lr2': "blue",
	'Lr3': "blue",
	'Z': "green",
	'Z1': "green",
	'Zr': "green",
	'Zr1': "green",
	'I': "cyan",
	'I1': "cyan"
};

const randTetroID = {
	0: "O",
	1: "T",
	2: "L",
	3: "Lr",
	4: "Z",
	5: "Zr",
	6: "I"
};

export const randomTetromino = () => {
	return randTetroID[Math.floor(Math.random() * 7)];
}

export const tetrominoSquares = (position, type) => {
	const x = position[0], y = position[1];
	switch (type) {
		case "O":
			return [[x, y], [x+1, y], [x, y+1], [x+1, y+1]];
		case "T":
			return [[x, y], [x+1, y], [x+1, y-1], [x+1, y+1]];
		case "T1":
			return [[x, y], [x+1, y], [x+2, y], [x+1, y+1]];
		case "T2":
			return [[x, y], [x, y+1], [x, y-1], [x+1, y]];
		case "T3":
			return [[x, y], [x+1, y], [x+2, y], [x+1, y-1]];
		case "L":
			return [[x, y], [x+1, y], [x+2, y], [x+2, y+1]];
		case "L1":
			return [[x, y], [x, y+1], [x, y-1], [x+1, y-1]];
		case "L2":
			return [[x, y], [x, y+1], [x+1, y+1], [x+2, y+1]];
		case "L3":
			return [[x, y+1], [x+1, y+1], [x+1, y], [x+1, y-1]];
		case "Lr":
			return [[x, y], [x+1, y], [x+2, y], [x+2, y-1]];
		case "Lr1":
			return [[x+1, y], [x+1, y+1], [x+1, y-1], [x, y-1]];
		case "Lr2":
			return [[x, y], [x, y+1], [x+1, y], [x+2, y]];
		case "Lr3":
			return [[x, y], [x, y+1], [x, y-1], [x+1, y+1]];
		case "Z":
			return [[x, y], [x, y-1], [x+1, y], [x+1, y+1]];
		case "Z1":
			return [[x, y+1], [x+1, y], [x+2, y], [x+1, y+1]];
		case "Zr":
			return [[x, y], [x, y+1], [x+1, y], [x+1, y-1]];
		case "Zr1":
			return [[x, y], [x+1, y], [x+1, y+1], [x+2, y+1]];
		case "I":
			return [[x, y], [x+1, y], [x+2, y], [x+3, y]];
		case "I1":
			return [[x, y], [x, y-1], [x, y+1], [x, y+2]];
		default:
			return null;
	}
};

export const validTetromino = (position, type, row, col) => {
	const squares = tetrominoSquares(position, type);
	const r = squares.map(square => square[0] >= 0 && square[0] < row &&
									 square[1] >= 0 && square[1] < col);
	return !r.includes(false);
};

export const rotatedTetromino = type => {
	switch(type){
		case "O":
			return "O";
		case "T":
			return "T1";
		case "T1":
			return "T2";
		case "T2":
			return "T3";
		case "T3":
			return "T";
		case "L":
			return "L1";
		case "L1":
			return "L2";
		case "L2":
			return "L3";
		case "L3":
			return "L";
		case "Lr":
			return "Lr1";
		case "Lr1":
			return "Lr2";
		case "Lr2":
			return "Lr3";
		case "Lr3":
			return "Lr";
		case "Z":
			return "Z1";
		case "Z1":
			return "Z";
		case "Zr":
			return "Zr1";
		case "Zr1":
			return "Zr";
		case "I":
			return "I1";
		case "I1":
			return "I";
		default:
			return null;
	}
};