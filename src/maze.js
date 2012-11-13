define(["compass"], function(Compass) {
    /**
     * Create a maze of the specified height and width
     */
    function Maze(width, height, algo) {
        this.width = width;
        this.height = height;
        this._algo = algo;
        this.grid = [];
        var row;
        for (var i = 0; i < height; i++) {
            row = [];
            for (var j = 0; j < width; j++) {
                row.push(0);
            }

            this.grid.push(row);
        };
    }

    /**
     * The width of the maze
     * @type {Number}
     */
    Maze.prototype.width = null;

    /**
     * The width of the maze
     * @type {Number}
     */
    Maze.prototype.height = null;

    /**
     * The algroithm to use for maze generation
     * @type {Object}
     */
    Maze.prototype._algo = null;

    /**
     * The in memory representation of the maze
     * @type {Number[][]}
     */
    Maze.prototype.grid = null;

    /**
     * Generate the maze from the given start point
     * @param {Number} startingX The X position to start from
     * @param {Number} startingY The y position to start from
     */
    Maze.prototype.generateFrom = function (startingX, startingY) {
        this._algo.carveFrom(startingX, startingY, this);
        return this;
    };

    /**
     * Print out the numbers in memory for the maze
     */
    Maze.prototype.dump = function() {
        var out = "",
            S = Compass.directions.S,
            E = Compass.directions.E;

        for (var y = 0; y < this.height; y++) {
            for (var x = 0; x < this.width; x++) {
                out += this.grid[y][x] + "|";
            }
            out += "\n";
        }
        return out;
    };

    return Maze;

});
