import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    end_year: { type: Number },
    intensity: { type: Number },
    sector: { type: String },
    topic: { type: String },
    insight: { type: String },
    url: { type: String },
    region: { type: String },
    start_year: { type: Number },
    impact: { type: String },
    added: { type: Date },
    published: { type: Date },
    country: { type: String },
    relevance: { type: Number },
    pestle: { type: String },
    source: { type: String },
    title: { type: String },
    likelihood: { type: Number },
  },
  { timestamps: true }
);
const DataModel = mongoose.model("Data", dataSchema);
export default DataModel;
