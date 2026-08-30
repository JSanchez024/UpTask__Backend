import { CorsOptions } from "cors"

const allowedOrigins = new Set(
    [process.env.FRONTEND_URL, process.env.FRONTEND_URL?.replace(/\/$/, '')]
        .filter((value): value is string => Boolean(value))
)

export const corsConfig: CorsOptions = {
    origin: function (origin, callback) {
        if (!origin) {
            callback(null, true)
            return
        }

        const normalizedOrigin = origin.replace(/\/$/, '')

        if (allowedOrigins.has(normalizedOrigin)) {
            callback(null, true)
            return
        }

        console.error(`[CORS Error] Origen bloqueado: ${origin}`)
        callback(new Error('Error de CORS'))
    }
}