/**
 * you should be aware when using comments
 * they're either signal or noise
 * clean code doesn't mean more comments
 */

/**
 * expressive code and intent more better than comments
 */

// To avoid

// ** redundant comment

let i = 0; // set i to 0,
// check if user is valid
function is_valid_user(user) {
    //code
}
// it's very clear why you add comments

// ** intent clearing comments

// dirty
// if (req.stautsCode == 404)
// clean
if (req.statusCode == statusCodes.notFound) {
}
