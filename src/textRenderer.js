define(["compass"], function(Compass) {

   function TextRenderer(maze) {
      this._maze = maze;
   }

   TextRenderer.prototype._maze = null;

   /**
    * Create a string representation of the maze
    */
   TextRenderer.prototype.render = function() {
      var row,
          column,
          out = " _",
          i = this._maze.width - 1,
          S = Compass.directions.S,
          E = Compass.directions.E,
          grid = this._maze.grid;

      while (i > 0){
          out += "__";
          i--;
      }

      for (var y = 0; y < this._maze.height; y++) {
          out += "\n|";
          for (var x = 0; x < this._maze.width; x++) {
              out += ((grid[y][x] & S) != 0) ? " " : "_";

              // If there is no east wall "|" we'll add in a south wall to make it look prettier
              // Eg  ___ rather than _ _ 
              //      |               |
              //
              // unless there is no south wall in the next block 
              // than its _   not __ 
              //           |       |
              if ((grid[y][x] & E) != 0) {
                  out += ((((grid[y][x] | grid[y][x + 1]) & S) != 0) ? " " : "_")
              } else {
                  out += "|";
              }
          }
      }
      return out;
   }

   return TextRenderer;

});
