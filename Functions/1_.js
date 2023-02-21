/**
 * Reasons to write functions:
 * avoid duplication
 * clearing intent for a piece of code
 * make code more structured and readable
 * implement single task responsibility principle
 *
 * Excessive nested conditionals
 */

/**
 * Techniques
 *
 * Extract some complex logic unit from a piece of code and make it in a function
 * Return Early
 *
 */

// extract method

if (cond1) {
    if (cond2) {
        // dirty
        // while(cond){
        //     // code
        // }
        // if(cond){
        //     // code
        // }
        doSomething();
    }
}

function doSomething() {
    while (cond) {
        // code
    }
    if (cond) {
        // code
    }
}

// ** return early

function do_thing_to_user(user) {
    if (!user.is_valid) return "check the user";
    // code , do something here
}

// convey intent

// piece of code

// dirty if injected directly

if (valid_path) {
    // ode
}
if (valid_user && valid_permission) {
    // code
}
file.open();
file.write();

// clean
function check_file_and_write(path, user) {
    if (valid_path) {
        // ode
    }
    if (valid_user && valid_permission) {
        // code
    }
    file.open();
    file.write();
    return file;
}
check_file_and_write("/", "root");
