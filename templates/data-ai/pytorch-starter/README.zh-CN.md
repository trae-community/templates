# PyTorch 启动模板

极简的 PyTorch 训练脚本模板。

## 设置

1. 安装依赖：
   ```bash
   pip install -r requirements.txt
   ```

2. 运行训练脚本：
   ```bash
   python train.py
   ```

## GPU 支持

脚本会自动检测 CUDA 是否可用，并将模型/数据移动到 GPU。
