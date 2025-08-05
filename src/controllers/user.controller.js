import {asyncHandler} from '../utils/asyncHandler.js';


const registerUser=asyncHandler(async (req, res) => {
  // Logic to register a user
  // For example, save user data to the database
  return res.status(200).json({ 
    message: "ok"
});
})

export {registerUser};