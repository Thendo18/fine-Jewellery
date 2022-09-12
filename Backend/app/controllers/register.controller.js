//==================================lets hash the password  initialise bcrypt===============================


const bcrypt = require("bcrypt");


//===================================connect the database initialise client  =================================


const client = require("../config/database.config");


//=========================authenticate and authorize by initilising json web token  ====================

const jwt = require("jsonwebtoken");



//===========================register functions request trhe body of the database table =======================


exports.register = async (req, res) => {
     const { name, email, password } = req.body;
     try { 
       const data = await client.query(`SELECT * FROM users WHERE email= $1;` , [email]); //Check if user exist
       const arr = data.rows;
       if(arr.length != 0){
          return res.status(400).json({
                 error: "The user already  exists",
      });

  }
  //===============================take that hashing youy initialised and use it to hash your password======================================
  else {
      bcrypt.hash(password, 10, (err, hash) => {
        if(err) 
       res.status(err).json({
         error: "Sever Error",
        });
    const user = {
      name, 
      email,
      password: hash,
    };
var flag = 1;



//===============================insert into that body you requested the information============================================

client
.query(`INSERT INTO users (name , email,  password) VALUES ($1,$2,$3);`, [user.name, user.email, user.password], (err) => {

if (err) {
flag  =  0;                          //If user is not inserted is not inserted to database assigning flag as 0/false.
console.error(err);
return  res.status(500).json({
error: "Database error"
})
}
else {
flag  =  1;
res.status(200).send({ message: 'User added to database, not verified' });
}
})
if (flag) {

  //=======================authenticating and authorising ============================================
const  token  = jwt.sign(                                        //Signing a jwt token
{
email: user.email
},
process.env.SECRET_KEY
);
};
});
}
}
catch (err) {
console.log(err);
res.status(500).json({
error: "Database error while registering user!",                     //Database connection error
});

}

}
