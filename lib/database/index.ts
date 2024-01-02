import mongoose from "mongoose";

let cached = (global as any).mongoose || { conn: null, promise: null };

export const connectToDatabase = async () => {
  const MONGODB_URI = process.env.MONGODB_URI;

  if (cached.conn) return cached.conn;

  if (!MONGODB_URI) throw new Error("MONGODB_URI is missing");

  cached.promise =
    cached.promise ||
    mongoose.connect(MONGODB_URI, {
      dbName: "evently",
      bufferCommands: false,
    });

  cached.conn = await cached.promise;
  return cached.conn;
};
