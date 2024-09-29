// Range slider dynamic value display
const rangeInput = document.getElementById('price_range');
const rangeValueDisplay = document.getElementById('range_value');

rangeInput.addEventListener('input', function() {
    rangeValueDisplay.textContent = `$${this.value}`;
});
