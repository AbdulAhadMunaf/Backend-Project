import multer from "multer";
import fs from 'fs';

// Ensure the directory exists
const tempDir = './public/temp';
if (!fs.existsSync(tempDir)) {
    console.log("Made new dir");
    fs.mkdirSync(tempDir, { recursive: true });
}

const storage = multer.diskStorage({
    destination: async function (req, file, cb) {
        console.log(`Destination directory: ${tempDir}`);
        cb(null, tempDir);
    },
    filename: async function (req, file, cb) {
        console.log(`Uploading file: ${file.originalname}`);
        cb(null, file.originalname);
    }
});

const upload = multer({
    storage: storage,
    limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB file size limit
});

export { upload };
