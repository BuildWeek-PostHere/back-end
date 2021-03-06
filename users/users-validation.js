// export the validation
module.exports = {
    userValidation
};

// user validation implementation
function userValidation(user){
    let errors = [];

    // if not user name or if username is less than 4
    if (!user.username || user.username.length < 4){
        errors.push('Include a username with at least 4 characters');
    }

    // if not password or if password is less than 4
    else if (!user.password || user.password.length < 4) {
      errors.push("Please include a password with at least 4 characters");
    }
    return {
        isSuccessful: errors.length > 0 ? false : true, 
        errors
    };
}