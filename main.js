// Write a function that checks if a given string (case insensitive) is a palindrome.

function isPalindrome(x) {
	// your code here
	//a palindrome is a word that when spelt backwards is still the same when spelt normally
	//convert the string to an array and use the reverse method
	const arr= x.split('')
	if( arr.reverse().join("").toLowerCase()===x.toLowerCase()){
	  return true
	}else{
	  return false
	}
  }