# TP4 React Native

Application React Native de démonstration pour la gestion de tâches avec navigation entre écrans.

## Présentation

Ce projet est une petite application mobile développée avec Expo et React Native. Elle permet :

- d'afficher une liste de tâches,
- d'ajouter une nouvelle tâche,
- de consulter les détails d'une tâche,
- de naviguer entre écrans via React Navigation.

## Stack technique

- React Native
- Expo
- React Navigation
- Native Stack Navigator

## Structure du projet

```text
TP4REACTNATIVE/
├── App.js
├── app.json
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
├── assets/
├── screens/
│   ├── Accueil.js
│   ├── AddTask.js
│   ├── Profil.js
│   ├── TaskDetails.js
│   └── TaskList.js
└── README.md
```

## Écrans principaux

- `TaskList.js` : écran principal avec la liste des tâches.
- `AddTask.js` : écran d'ajout d'une tâche.
- `TaskDetails.js` : écran de détails d'une tâche.
- `Accueil.js` : page d'accueil de démonstration.
- `Profil.js` : écran de profil.

## Prérequis

Avant de lancer l'application, vérifiez que vous avez installé :

- Node.js
- npm ou yarn
- Expo CLI
- Un émulateur Android/iOS ou un appareil physique

## Installation

1. Cloner le dépôt :

```bash
git clone https://github.com/Royalgghost/TP4REACTNATIVE.git
cd TP4REACTNATIVE
```

2. Installer les dépendances :

```bash
npm install
```

## Lancement

Pour démarrer l'application :

```bash
npm start
```

Puis :

- appuyer sur `a` pour lancer Android,
- appuyer sur `i` pour lancer iOS,
- ou utiliser Expo Go sur votre téléphone.

## Scripts disponibles

Dans le fichier `package.json`, les scripts suivants sont configurés :

```json
"scripts": {
  "start": "expo start",
  "android": "expo start --android",
  "ios": "expo start --ios",
  "web": "expo start --web"
}
```

## Exemple de fonctionnement

1. Ouvrir l'application.
2. Cliquer sur `Ajouter une tâche`.
3. Saisir le titre de la tâche.
4. Valider pour l'ajouter à la liste.
5. Cliquer sur une tâche pour afficher ses détails.

## Auteur

Projet réalisé dans le cadre d'un TP React Native.

## Licence

Aucune licence spécifique n'est définie dans le dépôt pour le moment.
