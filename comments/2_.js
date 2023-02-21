// Avoid

// ** Apology comments

// if you can't or you don't have time at least make them TODOS
// not apologize

// dirty
// Sorry, this code crashes in XYZ in case ABC
// Unfortunately , i couldn't refactor this piece

// clean
// todo: refactoring this code in XYZ

// ** Warning comments
// instead of making warning comments , refactor that piece
// for example use encapsulation , private variables ...

// dirty
// plz, don't touch this software will crash
// danger, you are not allowed to modify this piece

// ** Zombie Code

// Zombie code will confuse other developers

// commented code left intentionally

// we use version control to restore code, code isn't lost anyway
// unless you need it for yourself, don't commit it
// you can remove it from that place and put a marker there and separate that zombie code in a separate file

// for(A){
//     function doSome()
//     while(){

//     }
//     if(){

//     }
// }

// avoid visual markers
// making a building with markers

// eg:
// -------------------------------
// -                             -
// -                             -
// -     Something Goes          -
// -        here                 -
// -                             -
// -                             -
// -                             -
// -                             -
// -------------------------------
