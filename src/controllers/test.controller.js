exports.welcome = (req, res, next) => {
  res.status(201).send(`<html>
    <body>
            <div style="text-align:center">
            <h1> Seja bem vindo </h1>

            <p>Esta é uma api desenvolvido em nodejs com o MongoDb, hospedada no  <a target="_blank" href="https://cloud.mongodb.com/v2/603ea57b7bbf255fed0bf9f9#clusters">Atlas:MongoDb Atlas.</a> </p>

            <p>Author : <a target="_blank" href="https://www.linkedin.com/in/elvis-huges-41043897/">Elvis Huges</a> </p>

    </div>
    </body>
    </html>`);
};
