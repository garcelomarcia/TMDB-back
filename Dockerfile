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

# Install PostgreSQL client and server
RUN apt-get update && apt-get install -y postgresql-client postgresql

# Set environment variables for PostgreSQL connection
ENV POSTGRES_DB=tmdb_auth
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password

# Create and start a PostgreSQL cluster, create the database, and stop the cluster
RUN pg_createcluster 12 main \
    && pg_ctlcluster 12 main start \
    && su - postgres -c "createdb $POSTGRES_DB" \
    && pg_ctlcluster 12 main stop

# Start the application
CMD npm start
