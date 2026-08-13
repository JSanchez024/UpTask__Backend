import { transporter } from "../config/nodemailer"

interface IEMail{
    email: string
    name: string
    token: string
}

export class AuthEmail{
    static sendConfirmationEmail = async ( user ) => {
        await transporter.sendMail({
                from: 'UpTask <admin@uptask.com>',
                to: user.email,
                subject: 'Uptask - Confirmar tu cuenta',
                text: 'Uptask - Conifima tu cuenta',
                html: `<p>Hola: ${user.name}, has creado tu cuenta en UpTask, ya casi esta todo listo, solo debes condirmar tu cuenta</p>
                
                <p>Visita el siguiente enlace</p>
                <a href="">Confirmar cuenta</a>
                <p>E ingresa el codigo: <b>${user.token}</b></p>
                <p>Este token expira en 10 minutos</p>                
                `
            })
    }
}