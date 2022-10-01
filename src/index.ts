import { app } from './app';
import { AppDataSource } from './data-source';

const port = process.env.PORT || 3001;

const start = async () => {
  try {
    AppDataSource.initialize();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
  app.listen(port, () => {
    console.log(`Mi port ${port}`);
  });
};

start();
