
document.addEventListener('DOMContentLoaded', function () {
    const calculateBtn = document.getElementById('calculateBtn');

    if (calculateBtn) {
        calculateBtn.addEventListener('click', calculateSavings);
    }

    function calculateSavings() {
        const currentBillInput = document.getElementById('currentBill');
        const annualSavingsElement = document.getElementById('annualSavings');
        const tenYearSavingsElement = document.getElementById('tenYearSavings');

        if (!currentBillInput) return;

        const currentBill = parseFloat(currentBillInput.value);

        if (isNaN(currentBill) || currentBill <= 0) {
            alert('Please enter a valid monthly bill amount.');
            return;
        }

        const annualSavings = currentBill * 12 * 0.10; // Assuming 10% savings
        const tenYearSavings = annualSavings * 10;

        annualSavingsElement.textContent = `$${annualSavings.toFixed(2)}`;
        tenYearSavingsElement.textContent = `$${tenYearSavings.toFixed(2)}`;
    }
});
