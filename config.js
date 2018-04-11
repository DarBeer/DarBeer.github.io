/**
 * Created by ki979 on 11.04.2018.
 */
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://localhost:27017";
    //diplom

mongoClient.connect(url, function (err, client) {
    if (err) throw err;

    var db = client.db('diplom');
    var image = {heading: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac ligula id libero posuere ullamcorper quis id lorem. Etiam non nunc nec erat accumsan fermentum id et lorem.", urlImage: "../../assets/img/1.jpg", date: "30.04.2018"};

    db.collection('customers').insertOne(image, function (findErr, result) {
        if (findErr) throw findErr;
        console.log(result.name);
        client.close();
    });
});