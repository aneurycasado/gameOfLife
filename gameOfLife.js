function nextGen(cells){
  for(var i = 0; i < cells.length; i++){
    for(var j = 0; j < cells.length; j++){
      var cell = cells[i][j];
      var cell1 = cells[i-1][j-1];
      var cell2 = cells[i-1][j];
      var cell3 = cells[i-1][j+1];
      var cell4 = cells[i][j-1];
      var cell5 = cells[i][j+1];
      var cell6 = cells[i+1][j-1];
      var cell7 = cells[i+1][j];
      var cell8 = cells[i+1][j+1];
      if(cell1 === undefined) cell1 = 0;
      if(cell2 === undefined) cell2 = 0;
      if(cell3 === undefined) cell3 = 0;
      if(cell4 === undefined) cell4 = 0;
      if(cell5 === undefined) cell5 = 0;
      if(cell6 === undefined) cell6 = 0;
      if(cell7 === undefined) cell7 = 0;
      if(cell8 === undefined) cell8 = 0;
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
