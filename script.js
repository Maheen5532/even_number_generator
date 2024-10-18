function generateEven() {
    let inputValue = parseInt(document.getElementById('inputValue').value);
    let value = ""; // Initialize the value variable
    let i = 0;

    if (isNaN(inputValue)) {
        document.getElementById('result').innerHTML = "Please enter a valid number.";
        return;
    }

    while (i <= inputValue) {
        if (i % 2 === 0) {
            value += `${i} `; // Append the even number to the value
        }
        i++;
    }

    document.getElementById('result').innerHTML = value; // Display the result
}

function resetFields() {
    document.getElementById('inputValue').value = ""; // Clear input field
    document.getElementById('result').innerHTML = ""; // Clear result section
}