/* =========================================================
   BUDGETBASICS CALCULATORS
========================================================= */


/* =========================================================
   MOBILE SIDEBAR
========================================================= */

const mobileMenu = document.getElementById("mobileMenu");
const sidebarMenu = document.getElementById("sidebarMenu");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const closeBtn = document.getElementById("closeBtn");
const sidebarLinks = document.querySelectorAll(".sidebar-links a");


function openSidebar() {
    sidebarMenu.classList.add("active");
    sidebarOverlay.classList.add("active");
    document.body.classList.add("menu-open");
}


function closeSidebar() {
    sidebarMenu.classList.remove("active");
    sidebarOverlay.classList.remove("active");
    document.body.classList.remove("menu-open");
}


if (mobileMenu) {
    mobileMenu.addEventListener("click", openSidebar);
}


if (closeBtn) {
    closeBtn.addEventListener("click", closeSidebar);
}


if (sidebarOverlay) {
    sidebarOverlay.addEventListener("click", closeSidebar);
}


sidebarLinks.forEach(link => {
    link.addEventListener("click", closeSidebar);
});


/* =========================================================
   BUDGET CALCULATOR
   INCOME - EXPENSES = MONEY LEFT
========================================================= */

const incomeInput = document.getElementById("income");
const expensesInput = document.getElementById("expenses");
const budgetCalculate = document.getElementById("budgetCalculate");
const remainingAmount = document.getElementById("remainingAmount");


function calculateBudget() {

    const income =
        parseFloat(incomeInput.value) || 0;

    const expenses =
        parseFloat(expensesInput.value) || 0;

    const remaining =
        income - expenses;


    remainingAmount.textContent =
        "$" + remaining.toFixed(2);
}


if (budgetCalculate) {
    budgetCalculate.addEventListener(
        "click",
        calculateBudget
    );
}


/* =========================================================
   SAVINGS CALCULATOR
   GOAL / MONTHLY SAVING = MONTHS
========================================================= */

const goalAmount = document.getElementById("goalAmount");
const monthlySaving = document.getElementById("monthlySaving");
const savingsCalculate = document.getElementById("savingsCalculate");
const savingMonths = document.getElementById("savingMonths");


function calculateSavings() {

    const goal =
        parseFloat(goalAmount.value) || 0;

    const monthly =
        parseFloat(monthlySaving.value) || 0;


    if (goal <= 0) {

        savingMonths.textContent =
            "Enter a goal";

        return;
    }


    if (monthly <= 0) {

        savingMonths.textContent =
            "Enter monthly saving";

        return;
    }


    const months =
        Math.ceil(goal / monthly);


    savingMonths.textContent =
        months === 1
            ? "1 month"
            : months + " months";
}


if (savingsCalculate) {
    savingsCalculate.addEventListener(
        "click",
        calculateSavings
    );
}


/* =========================================================
   NEEDS VS WANTS
   NEEDS / TOTAL × 100
========================================================= */

const needsAmount = document.getElementById("needsAmount");
const wantsAmount = document.getElementById("wantsAmount");
const needsCalculate = document.getElementById("needsCalculate");
const needsPercentage = document.getElementById("needsPercentage");


function calculateNeeds() {

    const needs =
        parseFloat(needsAmount.value) || 0;

    const wants =
        parseFloat(wantsAmount.value) || 0;

    const total =
        needs + wants;


    if (total <= 0) {

        needsPercentage.textContent =
            "Enter spending";

        return;
    }


    const needsPercent =
        (needs / total) * 100;


    needsPercentage.textContent =
        needsPercent.toFixed(1) + "% Needs";
}


if (needsCalculate) {
    needsCalculate.addEventListener(
        "click",
        calculateNeeds
    );
}


/* =========================================================
   ENTER KEY SUPPORT
========================================================= */

function addEnterSupport(inputs, button) {

    inputs.forEach(input => {

        if (!input) return;

        input.addEventListener(
            "keydown",
            function (event) {

                if (event.key === "Enter") {
                    event.preventDefault();
                    button.click();
                }

            }
        );

    });

}


addEnterSupport(
    [incomeInput, expensesInput],
    budgetCalculate
);


addEnterSupport(
    [goalAmount, monthlySaving],
    savingsCalculate
);


addEnterSupport(
    [needsAmount, wantsAmount],
    needsCalculate
);