import { 
    Stitch,
    RemoteMongoClient,
    AnonymousCredential
} from "mongodb-stitch-browser-sdk";

const client = Stitch.initializeDefaultAppClient('barstoolsportsboxscore-cqhfo');

const db = client.getServiceClient(RemoteMongoClient.factory, 'mongodb-atlas').db('BarstoolSportsBoxscore');

client.auth.loginWithCredential(new AnonymousCredential()).then(user => 
  db.collection('BoxscoreFeed').updateOne({owner_id: client.auth.user.id}, {$set:{number:42}}, {upsert:true})
).then(() => 
  db.collection('BoxscoreFeed').find({owner_id: client.auth.user.id}, { limit: 100}).asArray()
).then(docs => {
    console.log("Found docs", docs)
    console.log("[MongoDB Stitch] Connected to Stitch")
}).catch(err => {
    console.error(err)
});
//run web server using 'node BarstoolSportsBoxscore.BoxscoreFeedTEST.js' in terminal 
//open http://127.0.0.1:3000/
//you will see a message 'Hello World'