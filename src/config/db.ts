import colors from 'colors';
import { exit } from 'node:process'
import mongoose from 'mongoose';
import dns from 'node:dns';
 
dns.setServers(['8.8.8.8', '8.8.4.4', '1.1.1.1']);
 
export const connectDB = async () => {
    try {
        console.log('Intentando conectar a:', process.env.DATABASE_URL ? 'URL encontrada' : 'URL NO encontrada')
        
        const connection = await mongoose.connect(process.env.DATABASE_URL, {
            serverSelectionTimeoutMS: 5000,
        })
        
        const url = `${connection.connection.host}:${connection.connection.port}`
        console.log(colors.cyan.bold(`MongoDB conectado en: ${url}`))
    } catch (error) {
        console.log(colors.red.bold('Error al conectar a MongoDB'))
        console.log(error)
        exit(1)
    }
}