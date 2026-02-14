# FastAPI 服务模板

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

基于 [FastAPI](https://fastapi.tiangolo.com/) 的高性能 Web API 服务模板，预配置了 Uvicorn 服务器和自动交互式文档。

[English README](./README.md)

## ✨ 特性

- **FastAPI**: 现代、高性能的 Python Web 框架。
- **Uvicorn**: 闪电般的 ASGI 服务器实现。
- **自动文档**: 由 Swagger UI 和 ReDoc 提供的交互式 API 文档。
- **类型提示**: 基于标准 Python 类型提示构建。

## 📁 项目结构

```text
fastapi-service/
├── app/
│   └── main.py          # 应用入口点
├── requirements.txt     # 依赖定义
└── README.md           # 说明文档
```

## 🚀 快速开始

### 前置要求

- Python 3.8+
- pip (Python 包管理器)

### 安装

1. 创建并激活虚拟环境（可选但推荐）：
   ```bash
   python -m venv venv
   # Windows
   .\venv\Scripts\activate
   # macOS/Linux
   source venv/bin/activate
   ```

2. 安装依赖：
   ```bash
   pip install -r requirements.txt
   ```

### 运行应用

启动带有热重载功能的开发服务器：

```bash
uvicorn app.main:app --reload
```

服务器将在 `http://127.0.0.1:8000` 启动。

### API 文档

服务器运行后，您可以访问自动生成的文档：

- **Swagger UI**: [http://127.0.0.1:8000/docs](http://127.0.0.1:8000/docs)
- **ReDoc**: [http://127.0.0.1:8000/redoc](http://127.0.0.1:8000/redoc)
