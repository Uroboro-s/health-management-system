import app from "./app";

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`PatientService running on port ${PORT}`);
});
