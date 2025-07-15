document.addEventListener('DOMContentLoaded', function () {
  const calculateBtn = document.getElementById('calculateBtn');

  if (calculateBtn) {
    calculateBtn.addEventListener('click', calculateEstimate);
  }

  function calculateEstimate() {
    const service = document.getElementById('serviceType').value;
    const sqft = parseFloat(document.getElementById('squareFeet').value);
    const result = document.getElementById('estimateResult');

    if (!service || isNaN(sqft) || sqft <= 0) {
      alert('Please select a service and enter a valid square footage.');
      return;
    }

    let minRate, maxRate;

    switch (service) {
      case 'interlock':
        minRate = 22;
        maxRate = 35;
        break;
      case 'landscaping':
        minRate = 2;
        maxRate = 5;
        break;
      case 'decks':
        minRate = 35;
        maxRate = 60;
        break;
      default:
        return;
    }

    const minEstimate = sqft * minRate;
    const maxEstimate = sqft * maxRate;

    result.textContent = `$${minEstimate.toLocaleString()} – $${maxEstimate.toLocaleString()}`;
  }
});
