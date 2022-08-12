import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    phone: { type: Number, required: true },
    fullName: { type: String },
    email: { type: String },
    dob: { type: Date },
  },
  {
    versionKey: false,
    timestamps: false,
  }
);

export const UserModal = mongoose.model('user', userSchema);
