// Check Wheather the string is Palindrome or not
function isPalRec( str , s , e) {
    if ((str.charAt(s)) != (str.charAt(e))) {
        return false;
    }
    if (s < e + 1){
        return isPalRec(str, s + 1, e - 1);
    }
    {
    return true;
    }
}

function isPalindrome( str) {
    var n = str.length;
    if (n == 0) {
        return true;
    }
    {
    return isPalRec(str, 0, n - 1);
    }
}
var str = "malayalam";

if (isPalindrome(str)){
        console.log("String is Palindrome");
}
else{
        console.log("String is Not Palindrome");
    }