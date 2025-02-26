# Utiliser une image Node.js officielle comme base
FROM node:16

# Définir le répertoire de travail à l'intérieur du conteneur
WORKDIR /usr/src/app

# Copier uniquement les fichiers nécessaires à l'installation des dépendances
COPY package.json package-lock.json* ./

# Vérifier si package-lock.json existe avant de l'utiliser
RUN if [ -f package-lock.json ]; then npm ci; else npm install; fi

# Copier le reste des fichiers de l'application dans le conteneur
COPY . .

# S'assurer que les permissions sont correctes (utile si des erreurs de permission surviennent)
RUN chmod -R 755 /usr/src/app

# Exposer le port utilisé par l'application
EXPOSE 8080

# Démarrer l'application
CMD ["npm", "start"]
