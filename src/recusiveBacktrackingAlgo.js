define(["compass"], function(Compass) {

    function RecursiveBacktrackingAlgo () {
        
    }

    RecursiveBacktrackingAlgo.prototype.carveFrom = function (carveX, carveY, maze) {
        var directions = Compass.getRandomisedDirections(),
            nextX,
            nextY,
            direction;

        for (var i = 0, l = directions.length; i < l; i++) {
            direction = directions[i];
            nextX = carveX + Compass.possibleXDirections[direction];
            nextY = carveY + Compass.possibleYDirections[direction];

            // Bounds check
            if (nextY >= 0 && nextY < maze.height
                && nextX >= 0 && nextX < maze.width
                && (maze.grid[nextY][nextX] == 0)) {
                maze.grid[carveY][carveX] |= Compass.directions[direction];
                maze.grid[nextY][nextX] |= Compass.opposite[direction];
                this.carveFrom(nextX, nextY, maze);
            }
        }
    };

    return RecursiveBacktrackingAlgo;
});
