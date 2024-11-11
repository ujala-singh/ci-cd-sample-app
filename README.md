# Simple Frontend App with CI/CD Pipeline

This repository demonstrates a simple frontend app using HTML, CSS, and JavaScript. It includes a GitHub Actions CI/CD pipeline to automate building and deploying the app inside a Docker container.

## How to Run Locally

1. Clone the repository:
```bash
git clone https://github.com/yourusername/frontend-app.git cd frontend-app
```

2. Build the Docker image:
```bash
docker build -t frontend-app .
```

3. Run the Docker container:
```bash
docker run -p 8080:80 frontend-app
```

4. Open your browser and go to `http://localhost:8080`.

## CI/CD Pipeline

The pipeline is configured in GitHub Actions to:
1. Run tests (if applicable).
2. Build the Docker image.
3. Push the image to Docker Hub (or other registries).
