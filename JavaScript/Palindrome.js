function palindrome(str) {
    let orgstr = str;
    let revstr = "";
    //console.log(str.length);
    for(let i = str.length - 1; i >= 0; i--){
        revstr = revstr + str.charAt(i);
    }

    if (revstr === orgstr) {
        console.log("Palindrome");
    } else {
        console.log("Not Palindrome");
    }
}

palindrome("malayalam");