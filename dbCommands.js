/*---------------General FUnctions-------------------------------------------------------------------------------------------------------------
1)  insert a User record (when a user registers)
2)  insert a Message record (when a message/code is sent)
3)  insert a Channel record (when a new channel is created)
4)  insert a Users_In_Channel record (when a user joins a channel)
5)  get list of all User emails (used to determine if an email has already been registered)
6)  get the list of all usernames currently in a channel (to display in the GUI so people can see who is in channel)
7)  change a username (in case a user wants to change their username)
8)  change a channel name (in case a user wants to change the name of a private channel or admin the name of general channel)
9)  change a user bio (when a user wants to change their bio)
10) user search function (specify 1. a category (Message, User, Channel), 2. then keyword(s))
11) delete a channel (when admin wants to delete a channel or a user wants to delete a private channel)
12) delete a user from a channel (when a user leaves a channel)
----------------------------------------------------------------------------------------------------------------------------*/


'use strict'

/*----------------test area below------------------------------*//*


var Pool = require('pg').Pool;
var config = {
    host: ,
    user: '',
    password: '',  //information
    database: ''
}

var pool = new Pool(config);

async function Get_User_In_channel(){

    var response = await pool.query( "select * from ch_id" );
    console.log(response.rows);
}

Get_User_In_channel();

*//*----------------test area above------------------------------*/


const promis = require('bluebird')
const pgp = require('pg-promise')({promiseLib: promise})
const connectionString = process.env.Database_URL  || 'postgres://73.206.166.29:5432/CodeChat' //need to correct address
const client = pgp(connectionString)



modules.exports = class DBCommands {

	//will connect to the database from the client variables above this ^^,
	
    connectBD() {
        cleint.connect((err) = > {
            if(err) {
                console.error('connection error', err.stack)
            } else {
                console.log('Connected to Postgres')
        }
    })
    }
	
	//disconnect from postgres database
	
    disconnectDB() {
        client.end((err) => {
            if (err) {
                console.error('disconnection error', err.stack)
            } else {
                console.log('disconnected from Postgres')
            }
        })
    }


    //1) insert a New User record (registers with website)
    insert_User(u_id, u_email, u_pass, u_username, u_firstname, u_lastname, u_bio) {

        client
            .any(`INSERT INTO "public"."${Users}"(u_username", "u_pass", "u_email", "u_id", "u_firstname", "u_lastname", "u_bio") VALUES ('${u_username}', '${u_pass}', '${u_email}',  '${u_id}', '${u_firstname}", '${U_lastname}', '${u_bio}') returning u_username`)
            .then(data => {
            reslove("Successful Insert of password", data)
        })

            .any(`INSERT INTO "public"."${Users}" ("username", "u_id") VALUES('${username}','${U_id}') RETURNING ('username','u_id');`)
            .then(data => {
            resolve(data)
        })

        return new Promise((resolve, reject) => {

            if (command === 'register') {
            client
                .any(`INSERT INTO "public"."${userTable}"("username","password") VALUES('${username}', '${password}') returning username`)
                .then(data => {
                resolve("successful insert", data)
        })
        .catch(error => {
                reject(error)
            })
        } else if (command === 'newItem') {
            console.log("creating new item: ", newItem)
            client
                .any(`INSERT INTO "public"."${listTable}" ("username", "foodname") VALUES('${username}','${newItem}') RETURNING ('username','foodname','qty/weight');`)
                .then(data => {
                resolve(data)
            })
        .catch(error => {
                console.error(error)
            reject(error)
        })
        } else if (command === 'addFood') {
            // Creating a new item in the foods table if there's any issues.
            console.log("creating new item in foods table: ", newItem)
            client
                .any(`INSERT INTO "public"."${foodTable}" ("foodname") VALUES ('${newItem}') RETURNING "foodname", "category", "type", "expiration", "suggestedStorage";`)
                .then(data => {
                resolve(data)
            })
        .catch(error => {
                reject(error)
            })
        }
    })
    }



    }


    //2) insert a message record(when a message/code is sent)
    //includes responce from m_response(sandbox_response) where m_id = INTEGER
    //when inserting a message into the database, the m_response field is null, sandbox is what will change it from null
    //if iscode field is false, then do not send to sandbox, if true, send to sandbox and perform the update query on m_response using returned sandbox string
    //backend must also check if there is inputs, if there is, then set hasInputs to true
    insert_Message(m_id, ch_id, u_id, message_text, isCode, m_response, time, hasInputs) {


    }

    //3)insert a channel record when a channel is created
    //ch_id = channel id, type = language used in channel
    insert_channel(ch_id, type){
        return new Promise((reslove, reject) => {

        })

    }

    //4)user in channel, when user joins channel
    User_In_Channel(u_id, ch_id){

    }

    //5)query list of all user emails(for if email has already been registered)
    User_Email_Query(){

    }

    //6)query list of all users in channel(for GUI display)
    User_Channel_Query(ch_id){
    //select u-username from "Users" natural join "Users_In_Channel" where ch_id = 1

    }

    //7)change a username
    Change_Username(u_id, new_name){

    }

    //8)Change Channel name
    Change_Channel_Name(ch_id, new_name){


    }

    //9)change user bio
    Change_User_Bio(u_id, val){


    }

    //10)search function(specifying category and then keyword/s)
    Search(message, u_id, ch_id, keyword){

    }

    //11)Delete a channel(admin deletes channel or user deletes private channel)
    Delete_Channel(ch_id) {

        //remove users from channel, delete the messages in the channel, delete the channel.
    }

    //12)Delete user from a channel(leaves channel)
    Delete_User_From_Channel(u_id, ch_id){


    }


}


