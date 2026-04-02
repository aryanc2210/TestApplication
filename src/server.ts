import app from "./app.js";

const PORT = process.env.PORT || 4020;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});