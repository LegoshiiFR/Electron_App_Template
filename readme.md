# Un simple template pour créer sa propre application !

## Installation des dépendances : 
- Lancer : `install.bat`
- Attendez que tous less paquets s'installe.

##  Lancer l'application en tant que "développement" :
- Lancer : `sart.bat`

## Créer un distribution de votre application :
- Pour publier et partager votre application vous devez exécuter le fichier : `make.bat`
- Electron Forge crée le dossier out où se trouvera votre paquet:
// Exemple  pour macOS
out/
├── out/make/zip/darwin/x64/my-electron-app-darwin-x64-1.0.0.zip
├── ...
└── out/my-electron-app-darwin-x64/my-electron-app.app/Contents/MacOS/my-electron-app
- Plus d'infos ici : https://www.electronjs.org/fr/docs/latest/tutorial/tutorial-packaging