const express = require("express");
const mongoose = require("mongoose");
const cookieSession = require("cookie-session");
const passport = require("passport");
const keys = require("./config/keys");
require("./models/User");
require("./services/passport");

mongoose.connect(keys.mongoURI);

const app = express();
app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey],
  })
);

app.use(passport.initialize());
app.use(passport.session());

require("./routes/authRoutes")(app);

const PORT = process.env.PORT || 5000;
app.listen(PORT);

/* 
production keys {
  client ID:829999506689-ttt8t5v2pv28q32oivcofmsg0go0rht3.apps.googleusercontent.com
  client Secret: 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
}
*/
// https://www.quora.com/Can-I-crack-the-Google-interview-in-just-1-month-of-preparation-If-yes-then-how-I-just-know-the-basics-of-C-and-C%2B%2B/answer/Sung-Kim-18?share=6812970c&srid=mvQ9
