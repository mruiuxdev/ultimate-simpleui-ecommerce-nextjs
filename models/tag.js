import mongoose from "mongoose";
import uniqueValidator from "mongoose-unique-validator";

const tagSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      required: true,
      minLength: 1,
      maxLength: 50,
    },
    slug: {
      type: String,
      unique: true,
      lowercase: true,
      index: true,
    },
    parent: {
      type: mongoose.Types.ObjectId,
      ref: 'Tag'
    }
  },
  { timestamps: true }
);

tagSchema.plugin(uniqueValidator);

export default mongoose.models.Tag ||
  mongoose.model("Tag", tagSchema);
