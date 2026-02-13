# EditorConfig Template

[![License: MIT](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

A standard `.editorconfig` configuration to maintain consistent coding styles across different editors and IDEs.

[中文说明](./README.zh-CN.md)

## ❓ Why use EditorConfig?

In collaborative projects, developers may use different editors (VS Code, IntelliJ, Sublime Text, etc.), each with different default settings. This leads to:
- Inconsistent indentation (Tabs vs Spaces, 2 vs 4 spaces).
- Different line endings (CRLF vs LF).
- Inconsistent trailing whitespace handling.

`.editorconfig` solves this by letting editors **automatically read and apply** the formatting rules specified in the file.

> 🌐 **Official Website**: [https://editorconfig.org](https://editorconfig.org)

## 🚀 Quick Start

1. **Copy File**: Copy the `.editorconfig` file from this directory to your project's **root directory**.
2. **Verify Support**: Check if your editor needs a plugin (see below).
3. **Enjoy**: Open any code file, and your editor should automatically respect the defined rules.

## 🛠️ Editor Support

| Editor / IDE | Support Level | Action Required |
| :--- | :--- | :--- |
| **VS Code** | Plugin Required | Install [EditorConfig for VS Code](https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig) |
| **JetBrains IDEs** | Native | None (Works out of the box) |
| **Visual Studio** | Native | None |
| **Sublime Text** | Plugin Required | Install [EditorConfig](https://packagecontrol.io/packages/EditorConfig) |
| **Vim / Neovim** | Plugin Required | Install [editorconfig-vim](https://github.com/editorconfig/editorconfig-vim) |

## 📝 Configuration Details

The included template defines these common rules:

```ini
# Top-most EditorConfig file
root = true

# All files
[*]
charset = utf-8                # Use UTF-8 encoding
indent_style = space           # Use spaces for indentation
indent_size = 2                # Default indent size: 2 spaces
end_of_line = lf               # Use Linux/macOS line endings
insert_final_newline = true    # Ensure file ends with a newline
trim_trailing_whitespace = true # Remove whitespace at end of lines

# Markdown specific
[*.md]
insert_final_newline = false
trim_trailing_whitespace = false

# Python specific
[*.py]
indent_size = 4                # Python standard: 4 spaces
```

## 📚 Property Reference

| Property | Values | Description |
| :--- | :--- | :--- |
| **`indent_style`** | `tab`, `space` | Indentation style. |
| **`indent_size`** | Integer, `tab` | Number of columns for each indent level. |
| **`end_of_line`** | `lf`, `crlf`, `cr` | Line ending file format. |
| **`charset`** | `utf-8`, ... | File character encoding. |
| **`trim_trailing_whitespace`** | `true`, `false` | Remove any whitespace characters preceding newline characters. |
| **`insert_final_newline`** | `true`, `false` | Ensure file ends with a newline on save. |
