import { v2 as cloudinary } from 'cloudinary';
import { raw, response } from 'express';
import fs from "fs";

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
    try {
        if (!localFilePath) {
            return null;
        }
        // upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
        // file has been uploaded successfully
        // console.log("File is uploaded on cloudinary", response.url);
        fs.unlinkSync(localFilePath); // remove the locally saved temporary file as the upload operation got failed
        return response;
    }
    catch (error) {
        return null;
    }
}

const deleteFromCloudinary = async (filePath) => {
    try {
        if (!filePath) {
            return false;
        }
        const publicId = filePath.split('/').pop().split('.')[0];
        const response = await cloudinary.uploader.destroy(publicId);

        if (response.result === 'ok') {
            return true;
        } else {
            console.error('Failed to delete from Cloudinary:', response);
            return false;
        }
    } catch (error) {
        console.error('Error during Cloudinary deletion:', error);
        return false;
    }
}




export {
    uploadOnCloudinary,
    deleteFromCloudinary
};
