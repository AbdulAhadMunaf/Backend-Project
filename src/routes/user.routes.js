import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { changeCurrentPassword, getCurrentUser, getUserChannelProfile, loginUser, logoutUser, refreshAccessToken, registerUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage } from "../controllers/user.controller.js";
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = Router();

router.route("/register").post(
    upload.fields([
        {
            name: "avatar",
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }
    ]),
    registerUser,
)

router.route("/login").post(loginUser)

// secure routes
router.route("/logout").post(verifyJWT, logoutUser)
router.route("/refresh-access-token").post(refreshAccessToken)
router.route("/change-current-password").post(verifyJWT, changeCurrentPassword)
router.route("/get-current-user").post(verifyJWT, getCurrentUser)
router.route("/update-account-details").post(verifyJWT, updateAccountDetails)
router.route("/update-user-avatar").post(
    upload.fields([{
        name: "avatar",
        maxCount: 1
    }]),
    verifyJWT,
    updateUserAvatar)
router.route("/update-user-coverImage").post(
    upload.fields([{
        name: "coverImage",
        maxCount: 1
    }]),
    verifyJWT,
    updateUserCoverImage)
router.route("/get-user-channel-profile").post(getUserChannelProfile)


export default router;