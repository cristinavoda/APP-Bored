const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const router = express.Router();
const PORT = 3000;

// Enable CORS
app.use(cors());

// Set up the router for the '/activity' endpoint
router.get('/activity', async (req, res) => {
    try {
        const response = await axios.get('https://bored-api.appbrewery.com/Documentation');
        res.json(response.data);
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Error al obtener la actividad' });
    }
});

// Attach the router to the app, prefixing routes with '/api'
app.use('/api', router);

app.listen( 3000, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
