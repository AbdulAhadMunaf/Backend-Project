import { Router } from "express";
import { upload } from "../middlewares/multer.middleware.js";
import { changeCurrentPassword, getCurrentUser, loginUser, logoutUser, refreshAccessToken, registerUser, updateAccountDetails, updateUserAvatar, updateUserCoverImage } from "../controllers/user.controller.js";
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
router.route("/get-current-user").post(getCurrentUser)
router.route("/update-account-details").post(updateAccountDetails)
router.route("/update-user-avatar").post(updateUserAvatar)
router.route("/update-user-coverImage").post(updateUserCoverImage)


export default router;