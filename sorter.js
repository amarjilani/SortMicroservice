import express from 'express';

const PORT = 5001;
const app = express();
app.use(express.json());

function compareTitles(a, b) {
    if ( a.title < b.title ){
        return -1;
      }
      if ( a.title > b.title ){
        return 1;
      }
      return 0;
}

app.post ('/sort', (req,res) => {
    let sorted = req.body.sort(compareTitles);
    res.send(sorted)
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});