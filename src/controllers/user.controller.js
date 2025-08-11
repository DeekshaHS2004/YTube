import {asyncHandler} from '../utils/asyncHandler.js';


const registerUser=asyncHandler(async (req, res) => {
  /*
  // Logic to register a user
  // For example, save user data to the database
  return res.status(200).json({ 
    message: "ok"
});*/
  //Get user details from frontend through postman
  //validation:validate the data
  //Check if the user already exists: username,email
  //check for images and avtar
  //upload them to cloudinary
  //create user object-create entry to db
  //remove password and refresh token field from response
  //check for user creation
  //return response

  const{fullName,email,username,password}= req.body;
  console.log(email);
})

export {registerUser};