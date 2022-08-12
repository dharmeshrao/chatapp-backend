import { dbConnection } from './configs/db';
import app from './index';

// const port: number = Number(process.env.PORT) || 4000;
const randomPort = Array(4)
  .fill(0)
  .reduce(
    (acc: string, curr: number) => acc + Math.floor(Math.random() * 10),
    ''
  );

app.listen(randomPort, async () => {
  console.log('listning on port', randomPort);
  await dbConnection();
});
