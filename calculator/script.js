let currentInput = '';
        let previousInput = '';
        let operation = null;

        const display = document.getElementById('display');

        function appendNumber(number) {
            currentInput += number;
            updateDisplay();
        }

        function setOperation(op) {
            if (currentInput === '') return;
            if (previousInput !== '') {
                calculate();
            }
            operation = op;
            previousInput = currentInput;
            currentInput = '';
        }

        function calculate() {
            if (previousInput === '' || currentInput === '') return;
            const prev = parseFloat(previousInput);
            const current = parseFloat(currentInput);
            let result;
            switch (operation) {
                case '+':
                    result = prev + current;
                    break;
                case '-':
                    result = prev - current;
                    break;
                case '*':
                    result = prev * current;
                    break;
                case '/':
                    result = prev / current;
                    break;
                default:
                    return;
            }
            currentInput = result;
            operation = null;
            previousInput = '';
            updateDisplay();
        }

        function clearDisplay() {
            currentInput = '';
            previousInput = '';
            operation = null;
            updateDisplay();
        }

        function updateDisplay() {
            display.value = currentInput;
        }