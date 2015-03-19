// Uses cell data to generate a mapped array of necessary heights
// Input: an array rows, each element is an array of heights
//	Returns: one-dimensional array, each is height of a single row
function rowHeights(rows) {
	//print('this is the rows variable ' + JSON.stringify(rows));
  return rows.map(function(row) {
	  //print('This is the row variable ' + JSON.stringify(row) + '\n');
    return row.reduce(function(max, cell) {
	    //print('   Here is max ' + max + ' and here is the cell ' + JSON.stringify(cell) + '\n');
	   // print('      This is the math function for max ' + max + ' and this is the cellminHeight ' + JSON.stringify(cell.minHeight()) + '\n');
      return Math.max(max, cell.minHeight());
    }, 0);
  });
}

// Uses cell data to generate a mapped array of necessary widths
// Inputs and outputs are as above, except widths instead of heights
function colWidths(rows) {
  return rows[0].map(function(_, i) { // Note use of "dead" parameter
	  //print('This is row[0] for colwidths ' + JSON.stringify(i));
    return rows.reduce(function(max, row) {
	    //print('this is max for col ' + max + ' this is row ' + JSON.stringify(row));
      return Math.max(max, row[i].minWidth());
    }, 0);
  });
}


