/**
 * Created by ki979 on 11.04.2018.
 */
var mongoClient = require("mongodb").MongoClient;

var url = "mongodb://admin:31047766@ds123029.mlab.com:23029/diplom";
    //diplom

var tableShow;

mongoClient.connect(url, function (err, client) {
    if (err) throw err;

    var db = client.db('diplom');
    // var image = {heading: "Lorem Ipsum", description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas ac ligula id libero posuere ullamcorper quis id lorem. Etiam non nunc nec erat accumsan fermentum id et lorem.", urlImage: "../../assets/img/1.jpg", date: "30.04.2018"};

    var myCursor = db.collection('images').find();

    console.log(myCursor);

     db.collection('images').findOne({}, function (findErr, result) {
        if (findErr) throw findErr;
        console.log(result.name);
        client.close();
    });

});


