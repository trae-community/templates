# Python 脚本模板

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

一个标准的 Python 脚本样板，包含虚拟环境设置、日志配置和依赖管理。非常适合自动化脚本、数据处理任务或简单的命令行工具。

[English README](./README.md)

## ✨ 特性

- **虚拟环境**: 预配置的 `venv` 设置说明。
- **日志记录**: 内置日志配置（控制台输出）。
- **依赖管理**: 标准的 `requirements.txt`。
- **Git 就绪**: 包含 Python 专用的 `.gitignore`。

## 🚀 快速开始

### 前置要求

- Python 3.8+

### 设置步骤

1. 将此模板复制到你的项目文件夹。
2. 创建虚拟环境：

   ```bash
   python -m venv venv
   ```

3. 激活虚拟环境：

   - **Windows**: `.\venv\Scripts\activate`
   - **macOS/Linux**: `source venv/bin/activate`

4. 安装依赖：

   ```bash
   pip install -r requirements.txt
   ```

5. 运行脚本：

   ```bash
   python main.py
   ```

## 📂 项目结构

```text
python-script/
├── main.py            # 主脚本入口
├── requirements.txt   # 项目依赖
├── .gitignore         # Python git 忽略规则
└── README.md          # 文档
```

## 📄 许可证

MIT License.
