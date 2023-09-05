import axios from 'axios';

const handler = async (req, res) => {
  // Устанавливаем заголовки CORS
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');

  if (req.method === 'OPTIONS') {
    // Обработка предварительного (OPTIONS) запроса
    res.status(200).end();
    return;
  }

  try {
    const { 'URL': myUrl } = JSON.parse(req.body);

    const response = await axios.get(myUrl);

    if (response.status !== 200) {
      return res.status(response.status).json({ type: 'error', message: response.statusText });
    }

    // Отправляем данные в формате JSON
    res.json(response.data);
  } catch (error) {
    console.error(error.message, "ERR");
    res.status(500).json({ type: 'error', message: req.body });
    // res.status(500).json({ type: 'error', message: error.message });
  }
}

export default handler