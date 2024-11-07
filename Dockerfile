# Step 1: Use the official Node.js image as the base image for building
FROM node:18 as build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files to install dependencies
COPY package.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the project for production (output will be in the `dist` folder)
RUN npm run build

# Step 2: Use a lightweight image for serving the app
FROM node:18-alpine

# Install `serve`, a simple static file server for serving the build
RUN npm install -g serve

# Set the working directory to hold the built files
WORKDIR /app

# Copy the build files from the previous stage
COPY --from=build /app/dist ./dist

# Expose port 3000 to access the app
EXPOSE 2001
# Command to serve the app
CMD ["serve", "-s", "dist", "-l", "2001"]
