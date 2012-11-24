define(["compass"], function(Compass) {

  function CanvasRenderer(maze, canvas, cellSize) {
    this._maze = maze;
    this._context = canvas.getContext("2d");
    this._cellSize = cellSize || 10;
  }

  CanvasRenderer.prototype._maze = null;

  CanvasRenderer.prototype._context = null;
  
  CanvasRenderer.prototype._cellSize = null;

  /**
   * Create a string representation of the maze
   */
  CanvasRenderer.prototype.render = function() {
    this._context.lineWidth = 6;
    this._context.strokeRect(0, 0, this._maze.width * this._cellSize, this._maze.height * this._cellSize);
    this._context.stroke();

    this._context.lineWidth = 2;
    this._maze.grid.forEach(this._renderRow.bind(this));
    this._context.stroke();
  };

  /**
   * Render a specific row
   * @param {Number[]} row A row of the grid to render 
   * @param {Number} index The index of the row
   * @param {Array} grid The grid of the maze that the row is from
   */
  CanvasRenderer.prototype._renderRow = function(row, index, grid) {
    var y = index * this._cellSize;
    row.forEach(this._renderCell.bind(this, y));
  };

  /**
   * Render a specific cell
   * @param {Number} y The y offset for this cell
   * @param {Number} cell A bit mask of Compass.directions
   * @param {Number} index The index of the cell
   * @param {Number[]} row The row the cell is from
   */
  CanvasRenderer.prototype._renderCell = function(y, cell, index, row) {
    var x = index * this._cellSize + this._cellSize;
    this._context.moveTo(x, y);

    y += this._cellSize;

    if (cell & Compass.directions.E) {
      this._context.moveTo(x, y);
    } else {
      this._context.lineTo(x, y);
    }

    if (!(cell & Compass.directions.S)) {
      this._context.lineTo(x - this._cellSize, y);
    }

  };

  return CanvasRenderer;

});
