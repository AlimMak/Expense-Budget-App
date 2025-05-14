submitbutton = document.getElementById("submitButton");
submitbutton.addEventListener("click", addExpense);
clearbutton = document.getElementById("clearButton");
clearbutton.addEventListener("click", clearList)

let totalArray = [];



function addExpense(){
    // access the list and create the element that we will be appending
    ExpenseList = document.getElementById("displayExpenses");
    singleExpense = document.createElement("div")
    
    // create element to store dollar amount and append 
    ExpenseCost = document.createElement("span");
    ExpenseCost.textContent = document.getElementById("dollaramt").value;
    singleExpense.appendChild(ExpenseCost);

    // create element to store the expense description and append 
    ExpenseDescription = document.createElement("div");
    ExpenseDescription.textContent = document.getElementById("expenseDesc").value;
    singleExpense.appendChild(ExpenseDescription);
    
    ExpenseList

    totalArray.push(document.getElementById("dollaramt").value);
    console.log(totalArray);
    console.log("added expense");
}


function clearList(){
    const ExpenseList = document.getElementById("displayExpenses");
    ExpenseList.innerHTML = "";
    listTitle = document.createElement("h1");
    listTitle.textContent = "Expense List:"
    ExpenseList.appendChild(listTitle);
}
