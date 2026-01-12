#### Data Shape
```
{
  id,
  type,        // 'message' | 'file' | 'link' | 'user'
  title,
  meta,
  time,
  unread: true,     // ← new
  user: {           // ← new (optional)
    name,
    avatar          // URL or null
  }
}
```

