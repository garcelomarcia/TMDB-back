# Use the official PostgreSQL 12 image as the base
FROM postgres:12

# Set environment variables for PostgreSQL connection
ENV POSTGRES_DB=tmdb_auth
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password
ENV POSTGRES_HOST=db

# Copy SQL scripts to initialize the database
COPY init-db.sql /docker-entrypoint-initdb.d/

# Install Node.js and npm
RUN apt-get update && apt-get install -y nodejs npm

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install project dependencies
RUN npm install

# Copy the entire project directory to the container
COPY . .

# Expose the port for your Node.js application
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
