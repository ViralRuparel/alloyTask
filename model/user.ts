import { Document, model, Schema } from "mongoose"

// Schema
const UserSchema = Schema({
  userId: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    required: true
  }
})

interface IUserSchema extends Document {
  userId: string;
  accessToken: string;
}

const User = model<IUserSchema>("User", UserSchema);
export default User;