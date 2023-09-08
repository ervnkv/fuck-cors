### Приложение прокси для обхода ошибки CORS
    Стэк - Next.js
#### Использование
* Клонировать приложение к себе
* Разместить на Vercel
* В файле `next.config.js` в поле `Access-Control-Allow-Origin` прописать разрешенные адреса или оставить *
* Отправлять запрос вида `axios.post("https://fuck-cors.vercel.app/api", {data:{"URL": url}})`
* `https://fuck-cors.vercel.app` - Адрес вашего приложения на Vercel
* `url` - Ваш изначальный запрос
