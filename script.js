let hasAttempted = false;

function button() {
    if (hasAttempted) {
        document.getElementById('Calculator').textContent = "Refresh it to try again!";
        return;
    }

    const boyName = document.getElementById('name1').value.trim();
    const girlName = document.getElementById('name2').value.trim();

    if (boyName === '' || girlName === '') {
        document.getElementById('Calculator').textContent = "Please enter both names!";
        document.getElementById('emoji').textContent = '';
        return;
    }


    const randomPercentage = Math.floor(Math.random() * 101);

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

    const resultMessage = `${boyName} and ${girlName} have a compatibility of ${randomPercentage}%.`;

    document.getElementById('Calculator').textContent = resultMessage;
    document.getElementById('emoji').textContent = emoji;

    hasAttempted = true;
}