
function deepCopy(cells){
  var newArray = [];
  for(var i = 0; i < cells.length;i++){
    var row = [];
    for(var j = 0; j < cells[0].length;j++){
      var cell = cells[i][j];
      row.push(cell);
    }
    newArray.push(row);
  }
  return newArray;
}

function nextGen(cells){
  var oldBoard = deepCopy(cells);
  for(var i = 0; i < cells.length; i++){
    for(var j = 0; j < cells[0].length; j++){
      var cell = oldBoard[i][j];
      if(i - 1 < 0 || j - 1 < 0) var cell1 = 0;
      else var cell1 = oldBoard[i-1][j-1];
      if(i - 1 < 0) var cell2 = 0;
      else var cell2 = oldBoard[i-1][j];
      if(i - 1 < 0 || j + 1 >= cells[0].length) var cell3 = 0;
      else var cell3 = oldBoard[i-1][j+1];
      if(j -1 < 0) var cell4 = 0;
      else var cell4 = oldBoard[i][j-1];
      if(j+1 >= cells[0].length) var cell5 = 0;
      else var cell5 = oldBoard[i][j+1];
      if(i+1 >=cells.length || j -1 < 0) var cell6 = 0;
      else var cell6 = oldBoard[i+1][j-1];
      if(i+1 >= cells.length) var cell7 = 0;
      else var cell7 = oldBoard[i+1][j];
      if(i+1 >= cells.length || j+1 >= cells[0].length) var cell8 = 0;
      else var cell8 = oldBoard[i+1][j+1];
      var count = cell1 + cell2 + cell3 + cell4 + cell5 + cell6 + cell7 + cell8;
      if(cell === 1){
        if(count < 2) cells[i][j] = 0;
        else if(count === 2 || count === 3) cells[i][j] = 1;
        else if(count > 3) cells[i][j] = 0;
      }else if(cell === 0){
        if(count === 3) cells[i][j] = 1;
      }
    }
  }
  return cells;
}

console.log(nextGen([ [ 0, 1, 0 ], [ 0, 1, 0 ], [ 0, 1, 0 ] ]));
