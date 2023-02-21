// there is different levels for exceptions and errors

// unrecoverable: fileNotFound, AccessDenied, NullReference
// recoverable: (worth trying second time) dbConnectionFail, unable to use Api, apiResponseFail
// ignorable: logging click

// don't process variable used in try catch and move on without validation

let is_registered;
try {
    is_registered = registerUser();
} catch (err) {
    console.log(err);
}

// really bad mistake
// dirty
EmailUserForOffer();

// clean
if (is_registered) {
    EmailUserForOffer();
}

// always avoid globals
// if you can make the variable block/function scoped do it
