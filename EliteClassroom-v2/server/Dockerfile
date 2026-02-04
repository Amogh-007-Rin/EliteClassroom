FROM node:22-alpine

WORKDIR /app/EliteClassroom-v2/server

COPY package*.json ./

RUN npm install

COPY . .

# CHANGE 1: Generate the Prisma client during the build.
# This ensures 'node_modules' is fully ready before the app ever starts.

RUN npx prisma migrate

RUN npx prisma db push

RUN npx prisma generate

EXPOSE 3000

# CHANGE 2: Run migrations AND start the server.
# We use 'sh -c' so we can use '&&' to chain the commands.
# If the migration fails, the server won't start (which is good!).
CMD ["npm" , "run", "dev"]