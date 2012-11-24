requirejs(["maze", "recusiveBacktrackingAlgo", "textRenderer", "canvasRenderer"], 
    function(Maze, RecursiveBacktrackingAlgo, TextRenderer, CanvasRenderer) {
   
   var maze = new Maze(25, 25, new RecursiveBacktrackingAlgo()).generateFrom(0, 0);
   document.getElementsByTagName("pre")[0].innerHTML = new TextRenderer(maze).render();
   new CanvasRenderer(maze, document.getElementsByTagName("canvas")[0], 15).render();
    
});
