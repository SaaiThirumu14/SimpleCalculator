function calculate() {
    try {
        let result = eval(document.getElementById('display').value);
        document.getElementById('display12').value = result;
    } catch (error) {
        document.getElementById('display12').value = 'Error';
    }
}





