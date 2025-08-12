import mongoose,{Schema} from "mongoose";
import jsw from "jsonwebtoken";
import bcrypt from "bcryptjs";


const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        //it makes the search optimised but it costs a lot of memory
        index: true,
        required: true,
        trim: true
    }, 
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    fullName: {
        type: String,
        required: true, 
        trim: true,
        index:true
    },
    avatar: {
        type: String,
        required: true,
    },
    coverImage: {
        type: String
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: "Video"
        }
    ],
    password: {
        type: String,  
        required: [true,"Password is required"],
        minlength: 6
    }
}, 
{
    timestamps: true
});

//befor saving the data,we need to do some operations before it
//Encryping the password
userSchema.pre("save",async function(next) {
    if(!this.isModified("password")) {
        return next()
    }
    this.password = bcrypt.hash(this.password, 10)
    next()
});

//To compare the encrypted and Decrypted data
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

userSchema.methods.generateAccessToken = function() {
    return jwt.sign(
    {
        _id:this._id,
        email:this.email,
        username:this.username,
        fullName:this.fullName
    },
    process.env.ACCESS_TOKEN_SECRET,
    {
        expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        
    } 
    )  
}

userSchema.methods.generateRefreshToken = function() {
    return jwt.sign(
    {
        _id:this._id,
    },
    process.env.REFRESH_TOKEN_SECRET,
    {
        expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        
    } 
    ) 
}


export const User = mongoose.model("User", userSchema);