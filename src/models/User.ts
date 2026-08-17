import mongoose, {Schema, Document} from "mongoose"

export interface IUser extends Document {
    email: string
    password: string
    name: string
    confirmed: boolean
}

const userSchema: Schema = new Schema({
    email : {
        type: String,
        required: true,
        lowercase: true,
        unique: true
    },
    password:{
        type: String,
        requierd: true
    },
    name:{
        type: String,
        requierd: true
    },
    confirmed:{
        type: Boolean,
        default: false
    },
})

const User = mongoose.model<IUser>('User', userSchema)
export default User


