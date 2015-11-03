# POC Resize images

## Pré-requis
  * node.js
  * gulp

## Installation

```bash
npm install
```

## Utilisation (client)
```bash
gulp launchDev
```

### POC fileAPI

  * Ouvrir `fileapi.html`
  * On peut envoyer plusieurs fichiers en ayant appliqué un crop

#### Limitations
On est asynchrone sur l'upload, donc on défonce les resources du navigateur

### POC dropzone

  * Ouvrir `dropzone.html`
  * On peut envoyer plusieurs fichiers

#### Limitations
On est asynchrone sur le crop, donc l'écouteur mis en place ne permet pas d'ajouter l'image au formData avant son envoi.


### Links
  * http://jsfiddle.net/pwVpB/6/
  * https://github.com/mailru/FileAPI
  * http://www.dropzonejs.com/
