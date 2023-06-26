# Use the official PostgreSQL image as the base
FROM postgres:12

# Set environment variables for PostgreSQL connection
ENV POSTGRES_DB=tmdb_auth
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=password

# Copy the entire project directory to the container
COPY . /app

# Change working directory to the app directory
WORKDIR /app

# Install project dependencies
RUN npm install

# Start the application
CMD npm start
