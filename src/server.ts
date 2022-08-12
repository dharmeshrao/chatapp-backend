import { dbConnection } from './configs/db';
import app from './index';

app.listen(process.env.PORT, async () => {
  await dbConnection();
});
