CREATE TABLE IF NOT EXISTS movies (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  overview TEXT,
  year INTEGER,
  rating REAL,
  genres TEXT,
  poster_url TEXT,
  backdrop_url TEXT,
  stream_uid TEXT,
  published INTEGER DEFAULT 0,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP
);
