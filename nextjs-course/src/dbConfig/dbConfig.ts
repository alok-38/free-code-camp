import mongoose from "mongoose";

export async function connect() {
  try {
    const mongoUrl = process.env.MONGO_URL!;

    // Cast options to 'any' to avoid TypeScript error
    const options: any = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      // Other options as needed
    };

    await mongoose.connect(mongoUrl, options);

    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    process.exit(1); // Exit with failure
  }
}
