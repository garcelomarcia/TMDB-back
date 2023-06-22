# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Install PostgreSQL client and wait-for-it
RUN apt-get update && apt-get install -y postgresql-client && \
    wget -O /usr/local/bin/wait-for-it.sh https://raw.githubusercontent.com/vishnubob/wait-for-it/master/wait-for-it.sh && \
    chmod +x /usr/local/bin/wait-for-it.sh

# Wait for the PostgreSQL database to start and then start the application
CMD /usr/local/bin/wait-for-it.sh -t 30 db:5432 -- node api/seed.js && npm start
