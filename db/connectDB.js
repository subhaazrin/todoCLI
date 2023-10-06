// code for connecting and disconnecting to mongoDB
/*


const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://subhaazrin:<password>@clicluster.fe5cp6k.mongodb.net/?retryWrites=true&w=majority";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);


*/

import dotenv from 'dotenv'
dotenv.config()
import mongoose from 'mongoose' //Object Data Modeling library for MongoDB. Provides high level abstraction to make actions to db easy
import ora from 'ora'
import chalk from 'chalk'

export async function connectDB(){
    try{
        const spinner = ora('Connecting to database...');
        spinner.start();
        await mongoose.connect(process.env.MONGO_URI);
        spinner.stop();
        console.log(chalk.greenBright('Successfully connected to database!!'));
    }catch(error){
        console.log(chalk.redBright('Error: '), error);
        process.exit(1);
    }
}

export async function disconnectDB(){
    try{
        await mongoose.disconnect();
        console.log(chalk.greenBright('Disconnected from the database.'));
    } catch(error){
        console.log(chalk.redBright('Error: '), error);
        process.exit(1);
    }
}

