define(function() {

    function Compass () {
        
    }

    Compass.prototype.directions = {
        "N": 1,
        "S": 2,
        "E": 4,
        "W": 8
    };

    Compass.prototype.possibleXDirections = {
        "N": 0,
        "S": 0,
        "E": 1,
        "W": -1
    };

    Compass.prototype.possibleYDirections = {
        "N": -1,
        "S": 1,
        "E": 0,
        "W": 0
    };

    Compass.prototype.opposite = {
        "N": 2,
        "S": 1,
        "E": 8,
        "W": 4
    };

    Compass.prototype.getRandomisedDirections = function() {
        return ["N", "S", "E", "W"].sort(this._randomSort);
    };

    Compass.prototype._randomSort = function() {
        return Math.round(Math.random()) - 0.5;
    };

    return new Compass();
}());
