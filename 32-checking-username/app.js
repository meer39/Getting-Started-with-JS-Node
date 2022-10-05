var currentUsers = ["arshad","tanveer","admin","tosief","touqeer"];

var newUsers = ["arshad","TANVEER","talha","moiz","sheri"];

for (let i = 0; i < currentUsers.length; i++) {
    if(newUsers[i].toLowerCase() == currentUsers[i].toLowerCase()){
        console.log(`${newUsers[i]} already exist`);
    }
    else
        console.log(`${newUsers[i]} available`);    
}