const express = require("express");
const cookieParser = require("cookie-parser"); // Middleware to parse cookies

const app = express();
const PORT = 3001;

// Middleware to parse cookies
app.use(cookieParser());

// Route to set a cookie
app.get("/cookie/set", (req, res) => {
  // Set a cookie named "user" with some value
  res.cookie("user", "JohnDoe", {
    httpOnly: true, // Prevent client-side access (security)
    maxAge: 24 * 60 * 60 * 1000, // Set expiration time (1 day)
    sameSite: "strict", // SameSite policy
    secure: false, // Set to true if using HTTPS
  });
  res.send("set");
});

// Route to update/change the "user" cookie
app.get("/cookie/update", (req, res) => {
  // Check if the cookie exists
  if (req.cookies.user) {
    // Update the "user" cookie
    res.cookie("user", "JaneDoe", {
      httpOnly: true,
      maxAge: 24 * 60 * 60 * 1000,
      sameSite: "strict",
      secure: false,
    });
    res.send("Cookie has been updated!");
  } else {
    res.send("Cookie doesn't exist. Set it first!");
  }
});

app.get("/cookie/get", (req, res) => {
  // Retrieve all cookies
  const allCookies = req.cookies;

  // Send cookies back as JSON for demonstration
  res.json({ cookies: allCookies });
});

// Route to delete/clear the cookie
app.get("/cookie/clear", (req, res) => {
  res.clearCookie("user");
  res.send("Cookie has been cleared!");
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
