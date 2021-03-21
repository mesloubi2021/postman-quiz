FROM node:10.20.0-alpine
COPY package*.json ./
COPY . ./app
RUN npm install