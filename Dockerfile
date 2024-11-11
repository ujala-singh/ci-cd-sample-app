# Dockerfile
# Use the official Nginx image to serve static content
FROM nginx:alpine

# Copy the app files to the nginx server directory
COPY app /usr/share/nginx/html

# Expose port 80 to access the app
EXPOSE 80
