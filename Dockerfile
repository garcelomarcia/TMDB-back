# Use an official Ubuntu base image
FROM ubuntu:latest

# Set the environment variable to prevent interactive prompts
ENV DEBIAN_FRONTEND=noninteractive

# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm

# Install PostgreSQL
RUN apt-get install -y postgresql postgresql-contrib

# Set environment variables for PostgreSQL connection
ENV POSTGRES_DB=tmdb_auth
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password

# Start the PostgreSQL service and create the database
RUN pg_ctlcluster 12 main start && \
    su - postgres -c "createdb $POSTGRES_DB" && \
    pg_ctlcluster 12 main stop

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Start the application
CMD npm start
