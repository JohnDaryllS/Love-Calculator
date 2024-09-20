function button() {
    const boyName = document.getElementById('name1').value.trim();
    const girlName = document.getElementById('name2').value.trim();

    if (boyName === '' || girlName === '') {
        document.getElementById('Calculator').textContent = "Please enter both names!";
        return;
    }

    const randomPercentage = Math.floor(Math.random() * 101);
    const resultMessage = `${boyName} and ${girlName} have a compatibility of ${randomPercentage}%!`;

    document.getElementById('Calculator').textContent = resultMessage;
}
