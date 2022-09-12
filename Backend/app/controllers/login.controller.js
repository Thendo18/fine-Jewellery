const client = require("../config/database.config");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")


/**
 * verifies existing customer user against DB credentials
 * @param {Object} req { body.email, body.password , body.userType}
 * @param {*} res 
 */

module.exports.login = async (req, res) => {
    const {email,password} = req.body;
    try{
        if(!(email && password)){
            res.status(400).json({message:"user input required"});
        }
        
        const logData = await client.query(`SELECT * FROM users WHERE email= $1;`,
        [email]); //Check if user exist
        arrData = logData.rows;

        if (arrData.length == 0) {
            res.status(400).json({
                message: "user doesn't exist"
            })
        }else{
            bcrypt.compare(password, arrData[0].password, (err, results) => {
                if (err) {
                    res.status(500).json({
                        error: "Server error"
                    })
                } else 
                    if (results === true) {
                    const token = jwt.sign({
                            email: email, 
                            id:arrData[0].id, 
                            name:arrData[0].name
                        },
                            process.env.SECRET_KEY,
                        { expiresIn: '1h' }
                    );
                    
                    res.status(200).json({
                        message: "User successfully signed in",
                        expiresIn: 3600,
                        token:token,
                        //_id: arrData.id,
                    });
                } else {
                    //define errors
                    if (results != true) {
                        res.status(400).json({
                            error: "incorrect password"
                        })
                    }
                }
            })
        }
    }
    catch (error) {
        console.log(error)
        res.status(500).json({
            error: "Database error while logging in!"
        })
    }
}
