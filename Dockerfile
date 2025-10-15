# Многоэтапная сборка для оптимизации размера образа
FROM node:20-alpine AS frontend-builder

# Установка рабочей директории
WORKDIR /app

# Копирование package.json и package-lock.json
COPY package*.json ./

# Установка зависимостей (включая dev-зависимости для сборки)
RUN npm ci

# Копирование исходного кода
COPY . .

# Сборка фронтенда
RUN npm run build

# Сборка бэкенда
FROM node:20-alpine AS backend-builder

WORKDIR /app/backend

# Копирование package.json бэкенда
COPY backend/package*.json ./

# Установка зависимостей бэкенда
RUN npm ci --only=production

# Финальный образ
FROM node:20-alpine

WORKDIR /app

# Установка зависимостей для бэкенда
COPY --from=backend-builder /app/backend/node_modules ./backend/node_modules
COPY backend/ ./backend/

# Копирование собранного фронтенда
COPY --from=frontend-builder /app/dist ./public

# Установка переменных окружения
ENV PORT=3001

# Открытие порта
EXPOSE 3001

# Запуск бэкенда с раздачей статики
CMD ["node", "backend/server.js"]
