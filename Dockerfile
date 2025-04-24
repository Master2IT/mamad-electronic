# Use Node.js 20 as base image
FROM node:20-alpine

# Install build tools
# RUN apk add --no-cache python3 make g++

# Set working directory
WORKDIR /app

# Copy package.json and pnpm-lock.yaml
COPY package.json pnpm-lock.yaml* ./

# Install pnpm and dependencies
# RUN npm install -g pnpm && pnpm install

# Rebuild native modules
# RUN pnpm rebuild better-sqlite3

# Copy the rest of the application
COPY . .

# Build the application
# RUN pnpm run build

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["pnpm", "run", "dev"]