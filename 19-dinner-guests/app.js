import { guestsList } from "../14-15-16-17-guests-list/app.js";

if (guestsList.length > 0) {
    for (let i = 0; i < guestsList.length; i++) {
        console.log(`${guestsList[i]} welcome to the party`);
    }
} else {
    console.log("No one is comming the party");
}