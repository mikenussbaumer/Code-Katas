function isSolved(board) {
    
    board = board.join('-').replace(/,/g,'');

    if(/222|2...2...2|2....2....2|2..2..2/.test(board)) return 2;
    if(/111|1...1...1|1....1....1|1..1..1/.test(board)) return 1;
    if(/0/.test(board)) return -1;

    return 0;
}

console.log(isSolved([
    [0, 0, 1], 
    [0, 1, 2], 
    [2, 1, 0]
]) === -1);

console.log(isSolved([
    [0, 1, 1], 
    [0, 1, 2], 
    [2, 1, 0]
]) === 1);

console.log(isSolved([
    [0, 1, 1], 
    [0, 0, 2], 
    [2, 1, 0]
]) === -1);