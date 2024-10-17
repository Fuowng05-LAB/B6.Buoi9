function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

 // Hàm tính toán và hiển thị kết quả
function calculate(operator) {
    let num1, num2, result, operatorText;

    switch (operator) {
        case '+':
            num1 = parseFloat(document.getElementById('add1').value);
            num2 = parseFloat(document.getElementById('add2').value);
            result = num1 + num2;
            document.getElementById('addResult').value = result;
            operatorText = 'phép cộng';
            break;
        case '-':
            num1 = parseFloat(document.getElementById('sub1').value);
            num2 = parseFloat(document.getElementById('sub2').value);
            result = num1 - num2;
            document.getElementById('subResult').value = result;
            operatorText = 'phép trừ';
            break;
        case '*':
            num1 = parseFloat(document.getElementById('mul1').value);
            num2 = parseFloat(document.getElementById('mul2').value);
            result = num1 * num2;
            document.getElementById('mulResult').value = result;
            operatorText = 'phép nhân';
            break;
        case '/':
            num1 = parseFloat(document.getElementById('div1').value);
            num2 = parseFloat(document.getElementById('div2').value);
            result = num1 / num2;
            document.getElementById('divResult').value = result;
            operatorText = 'phép chia';
            break;
    }

    // Thêm kết quả vào phần log và đổi màu kết quả phép toán vừa thực hiện
    const logDiv = document.getElementById('resultLog');
    const newEntry = document.createElement('div');
    newEntry.textContent = `${operatorText} ${num1} ${operator} ${num2} = ${result}`;
    newEntry.style.color = 'red';  // Đổi màu kết quả
    logDiv.appendChild(newEntry);
}