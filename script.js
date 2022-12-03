// select button work
btnAction();

// Button Action
function btnAction() {
    for (let i = 1; i <= 6; i++) {
        document.getElementById(`btnSelect${i}`).addEventListener("click", function () {
            document.getElementById(`btnSelect${i}`).disabled = addToList(document.getElementById(`btnSelect${i}`).parentNode.children[1].innerText)
            document.getElementById(`btnSelect${i}`).disabled === true ? document.getElementById(`btnSelect${i}`).style.background = "gray" : document.getElementById(`btnSelect${i}`).setAttribute("class", "bg-blue-400 w-3/4 m-7 p-2 btn-select")
        })
    }

    let btnCalculate = document.getElementById('btnCalculate');
    let btnTotalCalculate = document.getElementById('btnTotalCalculation');

    btnCalculate.addEventListener("click", function () {
        playerCost()
    });

    btnTotalCalculate.addEventListener("click", function () {
        playerCost();
        totalCost();
    })
}

// added to the list to selected player 
function addToList(player) {
    console.log(player);
    let list = document.getElementById("orderList")
    // console.log(list.childElementCount)
    if (list.childElementCount < 5) {
        let listItem = document.createElement("li");
        listItem.setAttribute("class", "text-lg my-3 list");
        listItem.innerHTML = player;
        list.appendChild(listItem);
        return true;
    }
    else {
        alert("already five player added")
        return false;
    }
}

// Calculate for per player cost
function playerCost() {
    let pricePerPlayer = document.getElementById("txtPricePerPlayer").value;
    console.log(pricePerPlayer)
    if (pricePerPlayer !== '') {
        let list = document.getElementById("orderList");
        console.log(list.childElementCount * pricePerPlayer);
        document.getElementById("playerExpense").innerText = list.childElementCount * pricePerPlayer;
    }
    else {
        alert("please enter the price per player");
    }
}

// calculate for total cost
function totalCost() {
    let playerCost = document.getElementById("playerExpense").innerText;
    let managerCost = document.getElementById("txtPriceForManager").value;
    let coachCost = document.getElementById("txtPriceForCoach").value;
    if (managerCost !== '') {
        if (coachCost !== '') {
            document.getElementById("totalExpense").innerText = parseInt(playerCost) + parseInt(managerCost) +
                parseInt(coachCost);
        }
        else {
            alert("please enter the coach cost");
        }
    }
    else {
        alert("please enter the Manager Cost");
    }
}