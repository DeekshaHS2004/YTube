import mongoose,{Schema} from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

const videoSchema = new Schema({
    videoFile: {
        type: String,
        required: true
    },
    thumbnail: {  
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    views: {
        type: Number,
        default: 0
    },
    isPublished: {
        type: Boolean,
        default: true
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    category: {
        type: String,
        required: true,
        enum: ["Music", "Gaming", "Education", "Entertainment", "News", "Sports", "Technology", "Lifestyle"]
    },
    createdAt: {   
        type: Date,
        default: Date.now
    },  
    updatedAt: {
        type: Date,
        default: Date.now
    }
}, 
{
    timestamps: true
});


videoSchema.plugin(mongooseAggregatePaginate);
export const video=mongoose.model("Video", videoSchema);