import mongoose from 'mongoose';

export const dbConnection = () => {
  return mongoose.connect(`${process.env.DB_LINK}`);
};
