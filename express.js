const express = require('express')
const app = express()
const port = 3000

// Gunakan Ejs
app.set('view engine','ejs');

app.get('/', (req, res) => {
  // res.send('Hai Kelvin,selamat website kamu telah berjalan😎')
  // res.sendFile('./index.html',{root:__dirname});
  res.render('index')
});

app.get('/about', (req, res) => {
  res.send('Ini adalah halaman about kamu😎')
});

app.get('/contact', (req, res) => {
  res.send('Ini adalah halaman kontak kamu😊')
});

app.use('/',(req,res) => {
    res.send('Maaf atuh web yang kamu cari teh gk ada sayang🤤');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
});

// perubahan git

// const http = require('http');
// const fs = require ('fs');
// const port = 3000;

// * Cara 1
// const server = http.createServer((req, res) => {});

// server.listen(3000, () => {
//     console.log('Server is listening on port 3000...');
// });

// http
//     .createServer((req, res) => {
//         res.writeHead(200, {
//             'Content-Type': 'text/html',
//         });
        
//         const url = req.url;
//         if ( url === '/about') {
//             res.write('<h1>Ini adalah halaman about</h1>');
//             res.end();
//         } else if( url === '/contact') {
//             res.write('<h1>Ini adalah halaman contact</h1>');
//             res.end();
//         } else {
            // res.write('Hai ini adalah web lokal hosting pertama saya');
//             fs.readFile('./index.html', (err, data)  =>  {
//                if (err) {
//                 res.writeHead(404);
//                 res.write('Error: file gk dapet hhe...');
//                } else {
//                 res.write(data);
//                }
//                res.end();
//             });
//         }
//     })
//     .listen(port, () => {
//         console.log(`Website kamu sedang berjalan di port ${port}...`);
//     });



