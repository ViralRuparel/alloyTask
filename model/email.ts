import { Document, model, Schema } from "mongoose";

// Schema
const EmailSchema = Schema({
  email: {
    type: String,
    required: true
  }
})

interface IEmailSchema extends Document {
  email: string;
}

const Email = model<IEmailSchema>("Email", EmailSchema);
export default Email;