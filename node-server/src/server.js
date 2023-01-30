const port = 8080;

app.get("/", (req, res) => {
  res.send("Morning");
  return res.end();
});

/*
Add a route to the server.js file with code that will return the contents 
of the JSON file profiles.json when a user visits the following URL:

GET http://localhost:8080/profile

Replace ... with the correct path
*/
app.get("/profiles", (req, res) => {
  res.writeHead(200, {});
});

/*
  Add a route that returns a list of the profile names and bio 
  from the server as HTML elements on the endpoint below:

  GET http://localhost:8080/profiles/view 

  Replace ... with the correct path
  */
app.get("...", (req, res) => {});

app.listen(port, () => {
  console.info(`Example app listening at http://localhost:${port}`);
});
