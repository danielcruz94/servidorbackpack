const express = require('express');
const cors = require('cors');
require('dotenv').config();

// Importar la función de conexión a la base de datos
const connectDB = require('./dbConnection'); // Asegúrate de que la ruta es correcta

// Importar las rutas

const Routes = require('./routes/clientesRoutes'); 
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Conectar a la base de datos usando la función importada
// connectDB(); // Esta función debe encargarse de la conexión

// Rutas
app.use('/api', Routes); // Prefijo /api para todas las rutas de cliente

// Ruta de prueba
app.get('/', (req, res) => {
  res.send('Servidor funcionando');
});

const port = process.env.PORT || 3001;

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
