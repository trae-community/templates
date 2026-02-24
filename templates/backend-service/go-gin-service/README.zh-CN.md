# Go Gin 服务模板

使用 Go 和 Gin 框架构建 REST API 的启动模板。

## 设置

1. 下载依赖：
   ```bash
   go mod tidy
   ```

2. 运行服务器：
   ```bash
   go run main.go
   ```

3. 服务器将在 `http://localhost:8080` 上运行。

## 端点

- `GET /ping`: 返回 JSON `{"message": "pong"}`
