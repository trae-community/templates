# Python Script Template

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

A standard boilerplate for Python scripts, featuring virtual environment setup, logging configuration, and dependency management. Ideal for automation scripts, data processing tasks, or simple CLI tools.

[中文说明](./README.zh-CN.md)

## ✨ Features

- **Virtual Environment**: Pre-configured setup for `venv`.
- **Logging**: Built-in logging configuration (console and file).
- **Dependency Management**: Standard `requirements.txt`.
- **Git Ready**: Includes a Python-specific `.gitignore`.

## 🚀 Quickstart

### Prerequisites

- Python 3.8+

### Setup

1. Copy this template to your project folder.
2. Create a virtual environment:

   ```bash
   python -m venv venv
   ```

3. Activate the virtual environment:

   - **Windows**: `.\venv\Scripts\activate`
   - **macOS/Linux**: `source venv/bin/activate`

4. Install dependencies:

   ```bash
   pip install -r requirements.txt
   ```

5. Run the script:

   ```bash
   python main.py
   ```

## 📂 Project Structure

```text
python-script/
├── main.py            # Main script entry point
├── requirements.txt   # Project dependencies
├── .gitignore         # Python git ignore rules
└── README.md          # Documentation
```

## 📄 License

MIT License.
