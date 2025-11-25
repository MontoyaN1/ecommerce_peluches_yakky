FROM node:20-alpine

WORKDIR /app

# Copiar solo los archivos del frontend
COPY frontend/package*.json ./
RUN npm install

# Copiar el resto del código del frontend
COPY frontend/ .

EXPOSE 4000

CMD ["npm", "run", "dev"]