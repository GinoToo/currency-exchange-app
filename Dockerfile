# Dockerfile
# Specifies where to get the base image (Node v12 in our case) and creates a new container for it
FROM keymetrics/pm2:latest-alpine

# Set working directory. Paths will be relative this WORKDIR.
WORKDIR /usr/src/app

# Install dependencies
COPY package*.json ./
RUN npm install

# Copy source files from host computer to the container
COPY . .

# Build the app

# Specify port app runs on
EXPOSE 3000

# Run the app
CMD [ "pm2-runtime", "start", "processes.json" ]