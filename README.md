# Convertisseur de température

Application React Native (Expo) pour convertir des températures entre degrés Celsius (°C) et Fahrenheit (°F). L’arrière-plan change (chaud / froid) selon la température saisie.

## Fonctionnalités

- **Saisie** de la température dans l’unité courante (°C ou °F)
- **Affichage** de la valeur convertie dans l’autre unité
- **Bouton** pour basculer l’unité de saisie (et donc la conversion)
- **Fond dynamique** : image « froid » (glace) ou « chaud » selon que la température est en dessous ou au-dessus du seuil (0 °C / 32 °F)

## Démarrage

1. Installer les dépendances :

   ```bash
   npm install
   ```

2. Lancer l’app :

   ```bash
   npx expo start
   ```

   Ensuite, ouvrir l’app dans un émulateur Android/iOS ou via [Expo Go](https://expo.dev/go).

## Structure du projet

- **`app/`** — écrans (routing Expo Router) ; `index.tsx` = écran principal
- **`component/`** — composants réutilisables :
  - `InputTemperature` — champ de saisie avec suffixe °C ou °F
  - `TemperatureDisplay` — affichage de la température convertie
  - `ButtonConvert` — bouton pour changer d’unité
- **`services/temperature-service.js`** — conversion °C ↔ °F et détection froid/chaud
- **`constant.ts`** — constantes et type `Unit` (°C | °F)
- **`assets/images/`** — images de fond (hot.png, cold.png)

## Stack

- [Expo](https://expo.dev) ~54
- React Native
- TypeScript (fichiers principaux)
- Expo Router (navigation basée sur les fichiers)

## En savoir plus

- [Documentation Expo](https://docs.expo.dev/)
- [Expo Router](https://docs.expo.dev/router/introduction/)
