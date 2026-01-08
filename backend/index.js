import express from "express";
import mongodb from "./db/config.js";
import Product from "./model/productmodel.js";
import User from "./model/usermodel.js";
import cors from "cors";
// import bodyParser from "body-parser";
import adminlogin from "./model/adminmodel.js";
import jwt from "jsonwebtoken";

const app = express();
const port = 4000;

app.use(cors());
// app.use(bodyParser.json());
app.use(express.json())

app.get("/", (req, res) => {
  res.send("hello world");
});



app.post("/signup", async (req, res) => {
  try {
    const { username, email, password } = req.body;
    console.log(username, email, password);
    // Validation
    if (username == "" || email == "" || password == "") {
      return res.json({
        message: "All fields are required",
      });
    }

    // Check existing user
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.json({
        message: "User already exists",
      });
    }

    // Create user
    const newUser = new User({
      username,
      email,
      password,
    });

    await newUser.save();

    const usertoken ={
      token:newUser._id,
    }
    var token = jwt.sign( {usertoken}, 'shhhhh');


    res.status(200).json({
      success:true,
      message: "User registered successfully",
      token,
      // user: {
      //   id: newUser._id,
      //   username: newUser.username,
      //   email: newUser.email,
      // },
      
    });
  } catch (error) {
    res.status(500).json({
      message: "Server error",
      error: error.message,
    });
  }
});
app.post('/addproduct', async (req,res)=>{
  try{
    const {image,price,rating,title,subject,oldprice,category,description,brand,section}=req.body
    if(image ==''|| price == '' || rating =='' || title ==''|| subject==''|| oldprice==''|| category==''||description==''||brand ==''|| section==''){
     return res.json({
        message:"please enter all  detail "
      })
    };
     
      const newProduct = new Product({image,price,rating,title,subject,oldprice,category,description,brand,section});
       await newProduct.save();
       res.status(200).json({
        success : true,
        massage:"product createded sussfully"
       })
  }catch{
 res.status(500).json({
  message:"server error"
 })
  }
})

app.post('/adminlogin', async (req, res) => {
  try {
    const { username, password } = req.body;

    // validation
    if (!username || !password) {
      return res.json({
        message: "Please enter username and password"
      });
    }

    const admin = await adminlogin.findOne({ username });

    if (!admin) {
      return res.json({
        message: "Invalid username"
      });
    }

    if (admin.password !== password) {
      return res.json({
        message: "Invalid password"
      });
    }
    const admintoken ={
      token:admin._id,
    }
    var token = jwt.sign( admintoken, 'shhhhh');

    // success
    return res.status(200).json({
      success: true,
      message: "Login successful",
      token
    });

  } catch (error) {
    return res.status(500).json({
      message: "Server error",
      error: error.message
    });
  }
});




app.post("/login", async (req, res) => {
  try {
    const {
        email,
        password,
      } = req.body;
    console.log(email, password);
    //validation
    if (!email || !password) {
      return res.json({
        message: "Fill all form !",
      });
    }

    const user = await User.findOne({ email });
    if (!user) {
      return res.json({
        message: "invalide email",
        
      });
    }else if(user.password !== password) {
      return res.json({
        message: "invalide password",
      });
    }
     const logintoken ={
      token:user._id,
    }
    var token = jwt.sign( logintoken, 'shhhhh');

    res.status(200).json({
      success:true,
      message: "login succes",
      token,
      
    });
    
  } catch {
    res.status(500).json({
      message: "server error",
    });
  }
});
app.get("/product", async (req, res) => {
  try {
    const data = await Product.find({});
    res.status(200).json({
      message: "Product data",
      data,
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch products",
    });
  }
});
app.get('/user', async (req,res)=>{
  try{
    const user = await User.find({});
    res.status(200).json({
      message:"user data",
      user,
    });
  }catch(error){
res.status(500).json({
  message:"failed to fetch user"
})
  }

});

mongodb();

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
