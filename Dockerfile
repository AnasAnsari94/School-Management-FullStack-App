# Use an official Node LTS image
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first (leverage Docker cache)
COPY package*.json ./

# Install production dependencies
RUN npm install --only=production

# Copy the rest of the project
COPY . .

# Ensure node uses production env by default (overrideable)
ENV NODE_ENV=production
ENV PORT=5000

# Expose port used by your Express server
EXPOSE 5000

# Start the app (your package.json 'start' calls node backend/server.js)
CMD ["npm", "start"]

