let error = [
    { errorName: "Null Error", errorMessage: "Please fill data in the field" },
    { errorName: "Format Error", errorMessage: "Please match the requested format" },
    { errorName: "Limit Exceed", errorMessage: "Characters limit exceeded" },
    { errorName: "No picture", errorMessage: "Please Upload an Image" },
    { errorName: "Admin Exists", errorMessage: "There is already an admin account" }
];
let errorContainer = {
    user_Fname: FnameErr,
    user_Lname: LnameErr,
    user_email: emailErr,
    user_contact: contactErr,
    user_address: addressErr,
    user_bio: bioErr,
    admin_name: userNameErr,
    admin_password: userPassErr,
    select_user: userTypeErr,
    image: image_error_msg
};