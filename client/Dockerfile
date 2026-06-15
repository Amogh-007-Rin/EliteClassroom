FROM node:22-alpine

WORKDIR /app/EliteClassroom-v2/client

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5000

CMD ["npm", "run", "dev"]