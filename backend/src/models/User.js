import mongoose from "mongoose";
import bcrypt  from "bcryptjs";

const userSchema=new mongoose.Schema({
    FullName:{
        Type:String,
        required:true,
    },
Email:{
    Type:String,
    required:true,
    unique:true,

},
password:{
    type:String,
    required:true,
    minlength:6,
},
bio:{
    type:String,
    default:"",
}
,
profilePic:{
    type:String,
    default:"",
},
nativeLanguage:{
    type:String,
    default:"",
},
learningLanguage:{
    type:String,
    default:"",
},
location:{
    type:String,
    default:"",
},
isOnboarded:{
    type:Boolean,
    default:false,
},
    friends:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"User",
        }
    ]
},{timestamps:true});
//cretaedAt,updatedAd
//member since createdAt

const User=mongoose.model("User",userSchema);

//pre hook    hash the data(unreadable form )

userSchema.pre("save",async function(next){

    if(!this.isModified("password")) return next();
    
    try{
        const salt=await bcrypt.genSalt(10);  //gensalt  random string added to the password before hashing.
        //Salt makes sure even if two users have the same password, their hashes will be different

        this.password=await bcrypt.hash(this.password,salt);

        next(error);
    }catch(error){

    }
})

export default User;