import { CorsOptions } from "cors"

export const corsConfig: CorsOptions = {
    origin: function(origin, callback){

        const frontendUrl = process.env.FRONTEND_URL ? process.env.FRONTEND_URL.replace(/\/$/, '') : '';

        const whitelist = [process.env.FRONTEND_URL]
        if(process.argv[2] === '--api'){
            whitelist.push(undefined)
        }
        if(whitelist.includes(origin)){
            callback(null, true)
        }else{
            console.error(`[CORS Error] Origen bloqueado: ${origin}`);
            callback(new Error('Error de CORS'))
        }
    }
}