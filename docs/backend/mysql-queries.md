# MySQL 常用查询

## 建表

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 常用查询

```sql
-- 分页查询
SELECT * FROM users ORDER BY created_at DESC LIMIT 10 OFFSET 0;

-- 条件统计
SELECT status, COUNT(*) FROM orders GROUP BY status;
```
