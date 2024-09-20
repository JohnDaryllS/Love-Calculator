let hasAttempted = false; // Flag to track if an attempt has been made

function button() {
    // Check if an attempt has already been made
    if (hasAttempted) {
        document.getElementById('Calculator').textContent = "Refresh it to try again!";
        return; // Stop the function here
    }

    // Get the boy and girl names from the input fields
    const boyName = document.getElementById('name1').value.trim();
    const girlName = document.getElementById('name2').value.trim();

    // Check if either of the input fields are empty
    if (boyName === '' || girlName === '') {
        document.getElementById('Calculator').textContent = "Please enter both names!";
        document.getElementById('emoji').textContent = ''; // Clear emoji
        return; // Stop the function here
    }

    // Generate a random percentage between 0 and 100
    const randomPercentage = Math.floor(Math.random() * 101); // 0 to 100

    // Determine the emoji based on the random percentage
    let emoji;
    if (randomPercentage === 100) {
        emoji = '❤️';
    } else if (randomPercentage >= 75) {
        emoji = '😆';
    } else if (randomPercentage >= 50) {
        emoji = '😊';
    } else if (randomPercentage >= 40) {
        emoji = '😐';
    } else if (randomPercentage >= 25) {
        emoji = '😢';
    } else if (randomPercentage > 0) {
        emoji = '😭';
    } else {
        emoji = '💔';
    }

    // Create the message to display
    const resultMessage = `${boyName} and ${girlName} have a compatibility of ${randomPercentage}%.`;

    // Display the result in the "Calculator" paragraph and the emoji in the "emoji" paragraph
    document.getElementById('Calculator').textContent = resultMessage;
    document.getElementById('emoji').textContent = emoji; // Show the emoji in its own paragraph

    // Set the flag to true to prevent further attempts
    hasAttempted = true;
}