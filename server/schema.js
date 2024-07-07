import mongoose from "mongoose";

const userschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});
export const user = new mongoose.model("user", userschema);

const investorschema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

export const investor = new mongoose.model("investor", investorschema);

const marketplaceSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  equity: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
});

export const marketplace = new mongoose.model("marketplace", marketplaceSchema);

const showcaseSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  tagline: {
    type: String,
    required: true,
  },
  tags: {
    type: [String],
    default: [],
  },
  description: {
    type: String,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  mail: {
    type: String,
    required: true,
  },
});

export const showcase = new mongoose.model("showcase", showcaseSchema);
