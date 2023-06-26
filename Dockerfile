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
RUN apt-get update && apt-get install -y postgresql-client 

# Set environment variables for PostgreSQL connection
ENV POSTGRES_DB=tmdb_auth
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password

# Wait for the PostgreSQL database to start and then start the application
CMD sleep 10 && npm start
