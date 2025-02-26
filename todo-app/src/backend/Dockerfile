# Utiliser une image Node.js officielle comme base
FROM node:16

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /usr/src/app

# Copier uniquement les fichiers nécessaires à l'installation des dépendances
COPY package*.json ./

# Installer les dépendances (npm ci si le lockfile existe, sinon npm install)
RUN npm install

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# Exposer le port utilisé par l'application
EXPOSE 8080

# Démarrer l'application
CMD ["npm", "start"]
