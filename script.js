submitbutton = document.getElementById("submitButton");
submitbutton.addEventListener("click", addExpense);
clearbutton = document.getElementById("clearButton");
clearbutton.addEventListener("click", clearList)





function addExpense(){
    ExpenseList = document.getElementById("displayExpenses");
    singleExpense = document.createElement("div");
    singleExpense.textContent = document.getElementById("dollaramt").value;
    singleDescription = document.createElement("div");
    singleDescription.textContent = document.getElementById("expenseDesc").value;
    ExpenseList.appendChild(singleExpense);
    ExpenseList.appendChild(singleDescription);
    console.log("added expense")
}


function clearList(){
    const ExpenseList = document.getElementById("displayExpenses");
    ExpenseList.innerHTML = "";
    listTitle = document.createElement("h1");
    listTitle.textContent = "Expense List:"
    ExpenseList.appendChild(listTitle);
}
