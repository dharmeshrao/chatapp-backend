import { dbConnection } from './configs/db';
import app from './index';

const port: number = process.env.PORT || 4000;

app.listen(port, async () => {
  await dbConnection();
});
