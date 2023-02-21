/**
 * Conditionals:
 * Clear Intent , right tool
 *
 * conditional with truthy , falsy values are really dirty
 * if (is_active == true) // code
 *
 * clean:
 * if (is_active) // code
 *
 */

let gaming_average = 8;

let using_games;

// dirty 🛑
if (gaming_average > 6) {
    using_games = true;
} else {
    using_games = false;
}
console.log(using_games);

// implicit assign to boolean values
// clean 🟢
using_games = gaming_average > 6;
