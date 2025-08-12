import {v2 as cloudinary} from 'cloudinary';
import fs from 'fs';


cloudinary.config({ 
        cloud_name: 'process.env.CLOUDINARY_CLOUD_NAME', 
        api_key: 'process.env.CLOUDINARY_API_KEY', 
        api_secret: 'process.env.CLOUDINARY_API_SECRET'
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if(!localFilePath) return null
        //upload the file to cloudinary
        const response=await cloudinary.uploader.upload(filePath,{
            resource_type: "auto", // Automatically detect the resource type and upload whatever the file comes
        });
        //File has been uploaded sucessfully
        console.log('File uploaded successfully:', response.url);
        return response;
    } catch (error) {
        fs.unlinkSync(localFilePath); // Delete the file from local storage if upload fails
        return null
    }
}
export {uploadOnCloudinary};

/*
cloudinary.v2.uploader.upload(
        'https://res.cloudinary.com/demo/image/upload/getting-started/shoes.jpg', 
        {
            public_id: 'shoes',
        },
        function(error, result) {
            console.log(result);
        }
);
*/
