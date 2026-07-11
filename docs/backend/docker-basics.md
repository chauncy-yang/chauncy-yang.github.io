# Docker 基础

## 常用命令

```bash
# 查看运行中的容器
docker ps

# 构建镜像
docker build -t my-app .

# 运行容器
docker run -d -p 3000:3000 --name my-app my-app

# 查看日志
docker logs -f my-app
```

## Docker Compose

```yaml
version: '3.8'
services:
  app:
    build: .
    ports:
      - '3000:3000'
    depends_on:
      - db
  db:
    image: mysql:8
    environment:
      MYSQL_ROOT_PASSWORD: root
```
