// Sketch Pals — Jeu de dessin créatif
// Moteur: fabric.js (Canvas SVG)

(function() {
  'use strict';

  var container = document.getElementById('game-container');
  var canvas = document.createElement('canvas');
  canvas.width = 800;
  canvas.height = 600;
  container.appendChild(canvas);

  // Initialisation fabric.js
  var fabricCanvas = new fabric.Canvas(canvas, {
    backgroundColor: '#ffffff'
  });

  // Outils de dessin
  var tools = {
    pen: { color: '#000000', width: 3 },
    brush: { color: '#ff0000', width: 10 },
    eraser: { color: 'transparent', width: 15 }
  };

  var currentTool = 'pen';

  // Configuration fabric
  fabricCanvas.selection = false;
  fabricCanvas.defaultCursor = 'default';

  // Toolbar UI
  var toolbar = document.querySelector('.toolbar');

  document.getElementById('btn-pen').addEventListener('click', function() {
    currentTool = 'pen';
    setTool(currentTool);
  });

  document.getElementById('btn-brush').addEventListener('click', function() {
    currentTool = 'brush';
    setTool(currentTool);
  });

  document.getElementById('btn-eraser').addEventListener('click', function() {
    currentTool = 'eraser';
    setTool(currentTool);
  });

  document.getElementById('btn-clear').addEventListener('click', function() {
    fabricCanvas.clear();
  });

  document.getElementById('btn-save').addEventListener('click', function() {
    var dataURL = fabricCanvas.toDataURL({
      format: 'png',
      multiplier: 2
    });
    var link = document.createElement('a');
    link.download = 'sketch-pals-drawing.png';
    link.href = dataURL;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  });

  function setTool(toolName) {
    fabricCanvas.isDrawingMode = true;
    var tool = tools[toolName];
    fabricCanvas.freeDrawingBrush.color = tool.color;
    fabricCanvas.freeDrawingBrush.width = tool.width;
    fabricCanvas.freeDrawingBrush.strokeLineCap = 'round';
    fabricCanvas.freeDrawingBrush.strokeLineJoin = 'round';
  }

  // Initialisation par défaut
  setTool('pen');

  console.log('Sketch Pals prêt — dessine!');
})();
