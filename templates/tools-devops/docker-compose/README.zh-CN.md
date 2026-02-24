# Docker Compose 启动模板

包含 Nginx 和 PostgreSQL 的简单 Docker Compose 设置。

## 用法

1. 启动服务：
   ```bash
   docker-compose up -d
   ```

2. 停止服务：
   ```bash
   docker-compose down
   ```

## 服务

- **web**: Nginx Web 服务器 (端口 80)
- **db**: PostgreSQL 数据库
