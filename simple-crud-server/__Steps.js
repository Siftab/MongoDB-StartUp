/***
 * -----------------------
 * MogoDB Connection
 * ----------------------------
 * 1. create a account
 * 2. create an user with password
 * 3. whiteList IP Address 
 * 4. database > connect > driver > Node >Show All Code
 * 5. change the password in URL careFully
 *____________________________________________________
 *
 * CREATE --- POST
 * 2. app.post ('/users'/,async(req,res)=>{})
 * 3. make the function async to use await 
 * 4. make sure you use the express.json()|| middlewear
 * 5.access data from the body : const user=req.body;
 * 6.const result await userCollection.insertOne(user);
 * 7 res.send(result)
 *  
 * CLIENT side
 * 1. create fetch
 * 2.add second parameter as an object 
 * 3. Provide method : "POST",
 * 4.add headers: {"content-type":"application/json"}
 * 5.Add body : JSON.Stringfy(data)
 * 
 * 
 * _______________________________________________________
 * READ Many
 * ---------------
 * 1.create a cursor = userCollection.find()
 * 2. const result = await cursor.toArry() 
 * 
 * _______________________________________________________
 * DELETE
 * ------
 * 1. create app.delete.('/user/:id',async(req,res)=>{})
 * 2.specify unique ObjectID to delete the right user 
 * 3. const query ={_id: new ObjectId(id) }
 * 4. const result = await userCollection.deleteOne(query );
 * 
 * Client
 * --
 * 1. create dynamic url with id 
 * 2. mention the DELETE method 
 * _____________________________________________________
 * UPDATE
 * -----------------
 * 1.app.put('/users/:id',async(req,res)=>{
 *                                          })
 * 2.const id = req.params.id  eta diye id ta nite hobe 
 * 3.const user = req.body eta diye updated user data nite hobe 
 * then Mongo code 
 * 4. const filter= {_id:new ObjectId(id)} similar like queary we have used in delete and 
 * 5.const options= { upsert:true}  // upsert=> update + insert it allows both 
 * 6.then make a object variable with $set && const updateUser= {
        $set:{
           name: user.name,
           email: user.email
        }
      }
 * 7.then  const result =await userCollection.updateOne(filter,updateUser,    options)  || use filter , updateUSer and option sequentially and send result as response 
 * 
 * ---------------------------
 *client side
 *------------------------------
 * as as usal fetch kkore server k hit korbo and metho must be "PUT" Likhte hobe baki ja ache same ager motoi 
 * /