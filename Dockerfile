# Use Node 20 for development
FROM node:current-alpine

# Set working directory inside container
WORKDIR /app

# Copy only package files first (better caching)
COPY package*.json ./

# Install ALL dependencies (including devDependencies)
RUN npm install

# Copy the rest of the project
COPY . .

# Expose the React dev server port
EXPOSE 3000

# Default command to run development server
CMD ["npm", "start"]
