# Canvas Friends → Sketch Pals

## Renommage

- **Nom original** : Canvas Friends (Y8)
- **Nouveau nom** : Sketch Pals
- **Choix** : ≤ 2 mots, ≤ 14 caractères, lié au thème (dessin canvas + amitié), facile à retenir

## Traçabilité CrazyGames

- **Y8** : https://fr.y8.com/games/canvas_friends
- **CrazyGames** : 404 (existe pas)
- **Proximité** : Aucune — jeu de dessin canvas avec défi IA, unique sur CG

## Moteur détecté

- **fabric.js** : bibliothèque Canvas SVG pour le dessin vectoriel
- **TensorFlow.js + tf-converter.js** : modèle IA pour analyser les dessins (optionnel, modèle retiré du build car trop lourd)
- **Aucune signature Unity/UnityLoader/phaser/pixi/createjs détectée**

## Architecture

```
game-clean/canvas_friends/
├── index.html          # Point d'entrée, charge les libs + game.js
├── game.js             # Logique du jeu (dessin, toolbar, save)
├── fabric.min.js       # Moteur canvas (SVG/reticulé)
├── jquery-3.3.1.min.js # DOM helper
├── tensorflow.js       # TF.js (pour le défi IA — modèle retiré)
├── tf-converter.js     # Convertisseur de modèle TF
├── art/                # Icônes toolbar (SVGs + PNG)
└── ideas/              # Image de démo (earth.jpg)
```

## Boucle principale

1. `index.html` charge les scripts
2. `game.js` initialise fabric.js sur un canvas 800x600
3. Toolbar UI : Stylo, Pinceau, Gomme, Effacer, Sauver
4. Mode dessin : `fabricCanvas.isDrawingMode = true`
5. Sauvegarde : `fabricCanvas.toDataURL()` → téléchargement PNG

## Variables clés (légende)

- `fabricCanvas` : instance fabric.js principale
- `currentTool` : outil actif ('pen' | 'brush' | 'eraser')
- `tools` : config des outils (couleur, épaisseur)
- `isDrawing` : état du dessin en cours

## Contrôles

- **Ordinateur** : souris pour dessiner, boutons toolbar pour changer d'outil
- **Mobile** : tactile (fabric.js gère le touch nativement)
- **Manette** : non applicable (jeu de dessin)

## Nettoyage effectué

- Suppression `detail_js2/` (shards TF 10MB inutiles — modèle IA retiré)
- Suppression tracking Y8, pubs, analyses
- Renommage titre + README
- Code propre avec commentaires
