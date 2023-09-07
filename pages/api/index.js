import axios from 'axios'

const handler = async (req, res) => {
  // Устанавливаем заголовки CORS
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')

  if (req.method === 'OPTIONS') {
    // Обработка предварительного (OPTIONS) запроса
    res.status(200).end()
    return
  }
  try {
    const url = req.body.data.URL

    const response = await axios.get(url)

    if (response.status !== 200) {
      return res.status(response.status).json({ type: 'error', message: response.statusText })
    }

    // Отправляем данные в формате JSON
    res.json(response.data)
  } catch (error) {
    res.status(500).json({ type: 'error', message: req.body })
  }
}

export default handler