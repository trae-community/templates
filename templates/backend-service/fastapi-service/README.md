# FastAPI Service Template

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

A high-performance Web API service template based on [FastAPI](https://fastapi.tiangolo.com/), pre-configured with Uvicorn server and automatic interactive documentation.

[中文说明](./README.zh-CN.md)

## ✨ Features

- **FastAPI**: Modern, fast (high-performance), web framework for building APIs with Python.
- **Uvicorn**: Lightning-fast ASGI server implementation.
- **Automatic Docs**: Interactive API documentation provided by Swagger UI and ReDoc.
- **Type Hints**: Built with standard Python type hints.

## 📁 Project Structure

```text
fastapi-service/
├── app/
│   └── main.py          # Application entry point
├── requirements.txt     # Dependency definitions
└── README.md           # Documentation
```

## 🚀 Quick Start

### Prerequisites

- Python 3.8+
- pip (Python package manager)

### Installation

1. Create and activate a virtual environment (optional but recommended):
   ```bash
   python -m venv venv
   # Windows
   .\venv\Scripts\activate
   # macOS/Linux
   source venv/bin/activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

### Running the Application

Start the development server with live reload:

```bash
uvicorn app.main:app --reload
```

The server will start at `http://127.0.0.1:8000`.

### API Documentation

Once the server is running, you can access the automatic documentation:

- **Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)
