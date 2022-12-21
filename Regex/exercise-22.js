/*
restrict possible usernames in a database:
1. Usernames can only use alpha-numeric characters
2. The only numbers in the username have to be at the end
    a. There can be zero or more of them at the end 
    b. Username cannot start with the number
    c. No numbers anywhere except the end of username
3. Username letters can be lowercase and uppercase
4. Usernames have to be at least two characters long
    a. A two-character username can only use alphabet letters as characters
    b. "G97" = ok, "97" = not ok

*/

let username = "JackOfAllTrades";
let userCheck = /^[a-z](\d{2,}|[a-z]+\d*)$/i; 
let result = userCheck.test(username);