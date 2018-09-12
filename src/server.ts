// declare function require(name: string);

import * as path from 'path';
import * as fallback from 'connect-history-api-fallback';
import * as express from 'express';

// initialize the server and configure support for ejs templates
const app: express.Express = express();

// define fallback to prevent routing in SPA
app.use(
  fallback({
    rewrites: [],
    disableDotRule: true,
    index: 'index.html',
    htmlAcceptHeaders: [
      'text/html',
      'application/xhtml+xml'
    ]
  })
);

// define the folder that will be used for public assets
app.use(express.static(path.join(__dirname, '../public')));

// universal routing and rendering
app.get('/', (req: any, res: any) => {
  res.render("index.html");
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';
app.listen(port, () => {
  console.info(
    'Server listening on http://localhost:'
    + port
    + ', Ctrl+C to stop'
  )
});

module.exports = app;
