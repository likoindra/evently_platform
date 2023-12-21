import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI;


// initialized cached variable
let cached = (global as any).mongoose || { conn : null, promise: null}

export const connectToDatabase = async () => {
    if(cached.conn) return cached;

    if(!MONGODB_URI) throw new Error('MONGODB_URI is missing');

    // if theres's cached connection 
    cached.promise = cached.proimse || mongoose.connect(MONGODB_URI, {
        dbName: "Evently-YT",
        bufferCommands: false,
    })

    cached.conn = await cached.promise;

    return cached.conn;
}