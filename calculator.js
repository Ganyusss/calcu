document.addEventListener("DOMContentLoaded", function () {
        const operationDisplay = document.getElementById("calcu-operation");
            const typedDisplay = document.getElementById("calcu-typed");
                const buttons = document.querySelectorAll(".calcu-button-row button");

                    let currentOperation = "";
                        let currentTyped = "";

                            // Add click event listeners to each button
                                buttons.forEach(button => {
                                        button.addEventListener("click", function () {
                                                    handleButtonClick(button.innerText);
                                                                updateDisplays();
                                                                        });
                                                                            });

                                                                                function handleButtonClick(value) {
                                                                                        if (isOperator(value)) {
                                                                                                    currentOperation += ` ${currentTyped} ${value}`;
                                                                                                                currentTyped = "";
                                                                                                                        } else if (value === "=") {
                                                                                                                                    currentOperation += ` ${currentTyped}`;
                                                                                                                                                currentTyped = evaluateExpression();
                                                                                                                                                        } else if (value === "AC") {
                                                                                                                                                                    currentOperation = "";
                                                                                                                                                                                currentTyped = "";
                                                                                                                                                                                        } else if (value === "⌫") {
                                                                                                                                                                                                    currentTyped = currentTyped.slice(0, -1);
                                                                                                                                                                                                            } else {
                                                                                                                                                                                                                        currentTyped += value;
                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                        function isOperator(value) {
                                                                                                                                                                                                                                                const operators = ["+", "-", "×", "÷", "%"];
                                                                                                                                                                                                                                                        return operators.includes(value);
                                                                                                                                                                                                                                                            }

                                                                                                                                                                                                                                                                function evaluateExpression() {
                                                                                                                                                                                                                                                                        try {
                                                                                                                                                                                                                                                                                    return eval(currentOperation);
                                                                                                                                                                                                                                                                                            } catch (error) {
                                                                                                                                                                                                                                                                                                        return "Error";
                                                                                                                                                                                                                                                                                                                }
                                                                                                                                                                                                                                                                                                                    }

                                                                                                                                                                                                                                                                                                                        function updateDisplays() {
                                                                                                                                                                                                                                                                                                                                operationDisplay.innerText = currentOperation;
                                                                                                                                                                                                                                                                                                                                        typedDisplay.innerText = currentTyped;
                                                                                                                                                                                                                                                                                                                                            }
                                                                                                                                                                                                                                                                                                                                            });