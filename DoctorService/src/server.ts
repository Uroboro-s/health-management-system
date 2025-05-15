import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`DoctorService running on port ${PORT}`);
});
