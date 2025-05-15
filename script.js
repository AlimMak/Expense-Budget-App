submitbutton = document.getElementById("submitButton");
submitbutton.addEventListener("click", addExpense);
clearbutton = document.getElementById("clearButton");
clearbutton.addEventListener("click", clearList)

let totalArray = [];
/*
totalAmount = document.getElementById("expenseTotal");
totalToAdd = document.createElement("h2");
totalToAdd.textContent = calculateTotal();
totalAmount.appendChild(totalToAdd);
*/
calculateTotal();

function addExpense(){

    if (isNaN(document.getElementById("dollaramt").value)){
        showAlert("please enter a valid value");
        return;
    } else if (!document.getElementById("dollaramt").value){
        showAlert("please enter a valid amount");
        return;
    } else if (document.getElementById("dollaramt").value <= 0) {
        showAlert("expense must be greater than 0");
        return;
    } else if (!document.getElementById("expenseDesc").value){
        showAlert("please enter a description");
        return;
    } else if (document.getElementById("expenseType").selectedIndex == 0){
        showAlert("please select expense Type");
        return;
    }


    // access the list and create the element that we will be appending
    ExpenseList = document.getElementById("displayExpenses");
    singleExpense = document.createElement("div")
    singleExpense.className = "singleExp"
    
    // create element to store dollar amount and append 
    ExpenseCost = document.createElement("h3");
    ExpenseCost.textContent = document.getElementById("dollaramt").value;
    console.log(document.getElementById("dollaramt").value);
    ExpenseCost.className = "expenseAmount"
    singleExpense.appendChild(ExpenseCost);
    

    // create element to store the expense description and append 
    ExpenseDescription = document.createElement("h3");
    ExpenseDescription.textContent = document.getElementById("expenseDesc").value;
    singleExpense.appendChild(ExpenseDescription);
    
    ExpensType = document.createElement("h3");
    ExpensType.textContent = document.getElementById("expenseType").value;
    singleExpense.appendChild(ExpensType);

    removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    removeButton.addEventListener("click", removeExpense);
    singleExpense.appendChild(removeButton);

    
    ExpenseList.appendChild(singleExpense)

    expType = document.getElementById("expenseType");
    typeOfExpense = expType.value;
    console.log(typeOfExpense);
    if (typeOfExpense === "Expense"){
        ExpenseCost.textContent = "-" + "$" + document.getElementById("dollaramt").value;
        totalArray.push("-" + document.getElementById("dollaramt").value);
    } else if (typeOfExpense === "Income"){
        ExpenseCost.textContent = "$" + document.getElementById("dollaramt").value;
        totalArray.push(document.getElementById("dollaramt").value);
    } else{
        ExpenseCost.textContent = document.getElementById("dollaramt").value;
    }

    //totalArray.push(document.getElementById("dollaramt").value);
    calculateTotal();
    document.getElementById("dollaramt").value = "";
    document.getElementById("expenseDesc").value = "";
    console.log(totalArray);
    console.log("added expense");
    
}


function clearList(){
    const ExpenseList = document.getElementById("displayExpenses");
    ExpenseList.innerHTML = "";
    totalAmount = document.getElementById("expenseTotal");
    totalAmount.innerHTML = "" 
    listTitle = document.createElement("h1");
    listTitle.textContent = "Expense List:"
    ExpenseList.appendChild(listTitle);
    totalArray = [];
    console.log(totalArray);
    calculateTotal();
}

function removeExpense(){
    const expenseToRemove = this.parentNode;
    const amountToRemove = expenseToRemove.querySelector("h3").textContent;


    //totalArray = totalArray.filter(item => item !== amountToRemove);
    firstIndex = totalArray.indexOf(amountToRemove);
    totalArray.splice(firstIndex, 1);
    

    expenseToRemove.remove();
    console.log("removed expense");
    console.log(totalArray)
    calculateTotal();
}

function calculateTotal(){
    totalAmount = document.getElementById("expenseTotal");
    totalAmount.innerHTML = "";
    totalToAdd = document.createElement("h2");
    totalDifference = 0; 
    for(let i = 0; i < totalArray.length; i++){
        currInt = parseFloat(totalArray[i]);
        totalDifference += currInt;
    }
    title = document.createElement("h1");
    title.textContent = "Total: "
    totalAmount.appendChild(title);
    totalToAdd.textContent = totalDifference;
    totalAmount.appendChild(totalToAdd);
}

function showAlert(message){
    const alertBox = document.getElementById("customAlert");
    document.getElementById("alertMessage").textContent = message;
    alertBox.classList.remove("alert-hidden");
}

function hideAlert(){
    document.getElementById('customAlert').classList.add('alert-hidden');
}