document.getElementById('betForm').onsubmit = function(event) {
    event.preventDefault();
    const color = document.getElementById('color').value;
    const amount = document.getElementById('amount').value;
    const resultDiv = document.getElementById('result');

    // Simulate random winning color
    const colors = ['red', 'blue', 'green'];
    const winningColor = colors[Math.floor(Math.random() * colors.length)];

    if (color === winningColor) {
        resultDiv.innerHTML = `<p>Congratulations! You won by betting on ${color} and earned ${amount * 2}!</p>`;
    } else {
        resultDiv.innerHTML = `<p>Sorry! The winning color was ${winningColor}. Better luck next time!</p>`;
    }
};
