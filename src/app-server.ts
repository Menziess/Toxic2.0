// declare function require(name: string);

import * as path from 'path';
import * as express from 'express';

// initialize the server and configure support for ejs templates
const app: express.Express = express();

// define the folder that will be used for public assets
app.use(express.static(path.join(__dirname, '../public')));

// universal routing and rendering
app.get('*', (req, res) => {
  res.sendFile("index.html", { root: __dirname });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, () => {
  console.log('Server listening on http://localhost:' + port + ', Ctrl+C to stop')
});
