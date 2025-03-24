# Use Node.js as the base image
FROM node:18-alpine AS build

# Set working directory
WORKDIR /lastName_firstName_ui_garden_build_checks

# Copy package.json and install dependencies
COPY package.json ./
RUN npm install --legacy-peer-deps

# Copy source code and build
COPY . .
RUN npm run build

# Use Nginx to serve the app
FROM nginx:alpine
COPY --from=build /lastName_firstName_ui_garden_build_checks/build /usr/share/nginx/html

# Expose port 8018
EXPOSE 8018

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
