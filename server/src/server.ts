import config from './common/config';
import app from './app';

app.listen(config.PORT, () =>
  console.log(`App is running on ${config.API_URL}${config.PORT}`)
);