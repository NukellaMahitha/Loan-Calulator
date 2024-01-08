document.getElementById('loan-form').addEventListener('submit', calculateLoan);

function calculateLoan(e) {
    e.preventDefault();

    const loanAmount = parseFloat(document.getElementById('loan-amount').value);
    const interestRate = parseFloat(document.getElementById('interest-rate').value) / 100;
    const loanTerm = parseFloat(document.getElementById('loan-term').value);

    const monthlyInterestRate = interestRate / 12;
    const numberOfPayments = loanTerm * 12;

    const monthlyPayment = (loanAmount * monthlyInterestRate) / (1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));

    const totalPayment = monthlyPayment * numberOfPayments;
    const totalInterest = totalPayment - loanAmount;

    const results = document.getElementById('results');
    results.innerHTML = `
        <h3><p style="color:white;">Loan Summary</p></h3>
        <p style="color:white;">Loan Amount: $${loanAmount.toFixed(2)}</p>
        <p style="color:white;">Interest Rate: ${interestRate * 100}%</p>
        <p style="color:white;">Loan Term: ${loanTerm} years</p>
        <h4><p style="color:white;"> Monthly Payment: $${monthlyPayment.toFixed(2)}</p></h4>
        <h4><p style="color:white;"> Total Payment: $${totalPayment.toFixed(2)}</p></h4>
        <h4><p style="color:white;"> Total Interest: $${totalInterest.toFixed(2)}</p></h4>
    `;
}

