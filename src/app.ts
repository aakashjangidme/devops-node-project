import express from 'express';
import os from 'os';

const app = express();
app.use(express.json());

app.get('/', (req, res) => {
  res.status(200).json({
    message: `Hello World`,
    info: `${os.hostname} ${req.ip}`,
  });
});

export default app;
