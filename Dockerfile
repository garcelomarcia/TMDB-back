# Use the official Node.js 14 image as the base
FROM node:14

# Set environment variables for PostgreSQL connection
ENV POSTGRES_DB=tmdb_auth
ENV POSTGRES_USER=user
ENV POSTGRES_PASSWORD=ruPT0MCyrsLuTCnoCZR9Xpx9qzMS1btU
ENV POSTGRES_HOST=dpg-cicvvmdiuie2ea1l9rd0-a

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
