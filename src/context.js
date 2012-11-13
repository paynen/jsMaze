requirejs(["maze", "recusiveBacktrackingAlgo", "textRenderer"], function(Maze, RecursiveBacktrackingAlgo, TextRenderer) {
   
   var maze = new Maze(25, 25, new RecursiveBacktrackingAlgo()).generateFrom(0, 0);
   document.getElementsByTagName("pre")[0].innerHTML = new TextRenderer(maze).render();
    
});
