/**
 * Don't be anti negative
 */

// dirty
if (!is_not_loggedIn) {
    // code
}
// clean
if (!loggedIn) {
    //code
}
if (loggedIn) {
    // code
}

// user Ternary one it is terse

is_enabled ? "true return" : "false return ";

// avoid stringly typed, and typos

// dirty
if (employeeType == "manager") {
    //code
}

// clean
if (employee.type == EmployeeType.Manager) {
    // code
}

// magic numbers, give them name plz

// dirty
i < 86400;
// clean
i < SECONDS_IN_DAY;


// avoid writing complex conditionals

if (conditionOne
    && conditionTwo 
    || conditionThree
    ! conditionFour){
        // code
    }

// instead use intermediate variables
let eligible_condition = conditionOne && conditionTwo || conditionThree ! conditionFour

if(eligible_condition){
    // code
}

// jLinq in Js 