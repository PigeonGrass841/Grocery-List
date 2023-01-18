// Initializes the list of all of the groceries the user plans to buy.
function initialize() {
    gBasket = document.getElementById("gBasket");
    gItem = document.getElementById("gItem");

    gList = [];
}

function display() {
    gBasket.innerHTML = [];
    for (var i = 0; i < gList.length; i++) {
        gBasket.innerHTML += "<br />" + (i+1) + ": " + gList[i];
    }
}

// A way for the user to add new groceries to the list.
function addGroceries() {
    var duplicate;
    for (item in gList) {
        if (gList[item] == gItem.value) {
            console.log(gList[item]);
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
    if (gItem.value > 1 | gItem.value < gList.length) {
        temp = gList[gItem.value - 2];
        console.log(gList[gItem.value - 1]);
        gList[gItem.value - 2] = gList[gItem.value - 1];
        gList[gItem.value - 1] = temp;
        display();
    }
}

// A way for the user to organize the list by moving groceries down.
function moveDown() {
    if (gItem.value > 0 | gItem.value < gList.length - 1) {
        temp = gList[gItem.value];
        console.log(gList[gItem.value - 1]);
        gList[gItem.value] = gList[gItem.value - 1];
        gList[gItem.value - 1] = temp;
        display();
    }

}

// A button or icon so that an item can be deleted from the list.
function deleteGroceries() {
    for (var i = 0; i < gList.length; i++) {
        if (gList[i] == gItem.value) {
            gList.splice(i, 1);
            i--
        }
    }
    console.log(gList);
    display();
}