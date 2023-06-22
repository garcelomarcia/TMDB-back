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

# Expose the port that your Express app listens on
EXPOSE 3000

# Define environment variables for PostgreSQL connection
ENV DB_HOST=TMDB_Auth\
    DB_NAME=tmdb_auth

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client

# Wait for the PostgreSQL database to start
CMD sleep 10 && node api/seed.js && npm start
