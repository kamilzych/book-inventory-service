/**
 * Created by kamilzych on 16/03/16.
 */
var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

// Connection URL
var url = 'mongodb://localhost:27017/book_inventory_store';
// Use connect method to connect to the Server
MongoClient.connect(url, function(err, db) {
    assert.equal(null, err);
    console.log("Connected correctly to server");

    db.collection('books').updateOne({isbn: isbn}, {
        isbn: isbn,
        count: count
    }, {upsert: true});

    db.close();
});



var insertDocuments = function(db, callback) {
    // Get the documents collection
    var collection = db.collection('books');
    // Insert some documents
    collection.insertMany([
        {a : 1}, {a : 2}, {a : 3}
    ], function(err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the document collection");
        callback(result);
    });
};