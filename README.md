### Приложение прокси для обхода ошибки CORS

    const URL = 'https://some-url-with-cors.com';
    
    const result = await fetch('https://fuck-cors.vercel.app/api', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ data: { URL } }),
    });
