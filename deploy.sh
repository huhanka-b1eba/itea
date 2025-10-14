#!/bin/bash

echo "🚀 Деплой на домен iteadev.ru"
echo "============================="

echo "1. Остановка контейнеров..."
docker-compose down

echo "2. Очистка старых образов..."
docker-compose build --no-cache

echo "3. Запуск контейнеров..."
docker-compose up -d

echo "4. Ожидание запуска (30 секунд)..."
sleep 30

echo "5. Проверка статуса контейнеров..."
docker-compose ps

echo "6. Проверка доступности сайта..."
curl -I http://iteadev.ru/ && echo "✅ Сайт доступен" || echo "❌ Сайт недоступен"

echo "7. Проверка API..."
curl -X OPTIONS http://iteadev.ru/send -H "Origin: http://iteadev.ru" -v

echo "8. Логи приложения (последние 20 строк):"
docker-compose logs itea-app --tail=20

echo "9. Логи nginx (последние 10 строк):"
docker-compose logs nginx --tail=10

echo "✅ Деплой завершен!"
echo "Сайт доступен по адресу: http://iteadev.ru"