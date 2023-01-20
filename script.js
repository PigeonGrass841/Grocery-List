// Initializes the list of all of the groceries the user plans to buy.
function initialize() {
    gBasket = document.getElementById("gBasket");
    gItem = document.getElementById("gItem");
    gList = [];
}

// Displays the list of all the groceries the user plans to buy.
function display() {
    gBasket.innerHTML = [];
    for (var i = 0; i < gList.length; i++) {
        gBasket.innerHTML += (i + 1) + ": " + gList[i] + "<br />";
    }
}

// A way for the user to add new groceries to the list.
function addGroceries() {
    var duplicate;
    for (item in gList) {
        if (gList[item] == gItem.value) {
            duplicate = true;
            window.alert("You can't add duplicates");
        }
    }
    if (!duplicate) {
        gList.push(gItem.value);
        display();
    }
}

// A way for the user to organize the list by moving groceries up.
function moveUp() {
    if (gNum.value > 1 && gNum.value <= gList.length) {
        temp = gList[gNum.value - 2];
        gList[gNum.value - 2] = gList[gNum.value - 1];
        gList[gNum.value - 1] = temp;
        display();
    }
}

// A way for the user to organize the list by moving groceries down.
function moveDown() {
    if (gNum.value > 0 && gNum.value < gList.length) {
        temp = gList[gNum.value];
        gList[gNum.value] = gList[gNum.value - 1];
        gList[gNum.value - 1] = temp;
        display();
    }

}

// A button or icon so that an item can be deleted from the list.
function deleteGroceriesName() {
    for (var i = 0; i < gList.length; i++) {
        if (gList[i] == gItem.value) {
            gList.splice(i, 1);
            i--
        }
    }
    display();
}

// A button or icon so that an item can be deleted from the list.
function deleteGroceriesNum() {
    gList.splice(gNum.value - 1, 1);
    display();
}