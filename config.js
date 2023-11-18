const DB_URI =
  "mongodb+srv://mruiuxdev:Fq8fgkUGnKxcSBVq@ecommerce-nextjs.o7jif7u.mongodb.net/";

const API =
  process.env.NODE_ENV === "production"
    ? "http://domain:vercel.com/api"
    : "http://localhost:3000/api";

const NEXTAUTH_SECRET = "askdhj1234@#$rdjksfsd,mv.123";

const GOOGLE_CLIENT_ID =
  "1076785787237-p0te7r5cuahnh1uk94p1arpoa5k856e4.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

module.exports = {
  DB_URI,
  API,
  NEXTAUTH_SECRET,
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
};
