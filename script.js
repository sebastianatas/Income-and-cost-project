const incomeList = [];

function renderIncomeSource() {
    let incomeSourceHTML = "";

    for (let i = 0; i < incomeList.length; i++) {
        const income = incomeList[i];
        const html = `
        <p>${income}</p>
        <input type="text" placeholder="Student's name" class="js-income-input">
        <button onclick="
            addIncomeSource();
        
        ">Add</button>
        `;
        incomeSourceHTML += html;
    }

    console.log(incomeSourceHTML);

    document.querySelector(".js-income-list").innerHTML = incomeSourceHTML;
}

function addIncomeSource() {
    const inputElement = document.querySelector(".js-income-input");
    const name = inputElement.value;
    incomeList.push(name);
    console.log(incomeList);

    inputElement.value = "";

    renderIncomeSource();
}
