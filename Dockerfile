# Use an official Node.js image as the base
FROM node:18

# Set working directory
WORKDIR /lastName_firstName_ui_garden_build_checks

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install

# Copy the rest of the app
COPY . .

# Run tests and lint checks
RUN npx husky install
RUN npm run lint
RUN npm test

# Build the production app
RUN npm run build

# Expose port 8018
EXPOSE 8018

# Start Application
CMD ["npx", "serve", "-s", "build", "-l", "8018"]
