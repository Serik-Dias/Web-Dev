// 2

// 1 and 2

// null

// 1 and then undefined

// 3

if (age >= 14 && age <= 90)

//----
if (!(age >= 14 && age <= 90))

if (age < 14 || age > 90)


//--------

// run
if (-1 || 0) alert( 'first' );

// Doesn't run
if (-1 && 0) alert( 'second' );


if (null || -1 && 1) alert( 'third' );

//------
let userName = prompt("Who's there?", '');

if (userName === 'Admin') {

  let pass = prompt('Password?', '');

  if (pass === 'TheMaster') {
    alert( 'Welcome!' );
  } else if (pass === '' || pass === null) {
    alert( 'Canceled' );
  } else {
    alert( 'Wrong password' );
  }

} else if (userName === '' || userName === null) {
  alert( 'Canceled' );
} else {
  alert( "I don't know you" );
}