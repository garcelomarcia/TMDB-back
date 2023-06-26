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

# Install PostgreSQL client
RUN apt-get update && apt-get install -y postgresql-client 

# Set environment variables for PostgreSQL connection
ENV POSTGRES_DB=tmdb_auth
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password

# Run the database setup and initialization commands
RUN service postgresql start && \
    psql -U postgres -c "CREATE DATABASE $POSTGRES_DB;" && \
    service postgresql stop

# Start the application
CMD npm start
