$(document).ready(function () {
    var totalString = "";
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '.'];
    var opers = ['+', '-', '*', '/'];
    var arrN = [];
    var arrO = [];
    var cur = '';
    
    function calculate(arr1, arr2) {
        var result = arr1[0];
        for (var i = 0; i < arr2.length; i++) {
            switch (arr2[i]) {
                case '+': result += arr1[i + 1]; break;
                case '-': result -= arr1[i + 1]; break;
                case '*': result *= arr1[i + 1]; break;
                case '/': result /= arr1[i + 1]; break;
            }
        }
        if (Number.isInteger(result)) {
            return result;
        }
        else {
            return Math.round(result * 100) / 100;
        }
        
    }
    function showTotal(str) {
        if (str.length < 26) $('#totalWin').val(str);
        else {
            $('#totalWin').val('Digit limit met');
            cur = "";
            arrN = [];
            arrO = [];
            totalString = "";
            $('#calcWin').val('0');
        }
    }
    
    $('button').on("click", function () {
        //if number pressed
        if (numbers.indexOf(this.value) !== -1) {
            if (arrN.length === 1 && arrO.length === 0) {
                cur = this.value;
                arrN = [];
                totalString = cur;
            }
            else {
                if (this.value === '.' && /\./.test(cur)) {

                }
                else {
                    cur += this.value;
                    totalString += this.value;
                }
                
            }
            $('#calcWin').val(cur);
            showTotal(totalString);
        }
        //if operation pressed
        if (opers.indexOf(this.value) !== -1) {
            if (opers.indexOf(totalString.charAt(totalString.length-1)) === -1) {
                arrO.push(this.value);
                totalString += this.value;
            }
            if (arrN.length < arrO.length) arrN.push(Number(cur));
            cur = "";
            showTotal(totalString);
        }
        //if All Clear pressed
        if (this.value === "AC") {
            cur = "";
            arrN = [];
            arrO = [];
            totalString = "";
            $('#calcWin').val('0');
            showTotal(totalString);
        }
        //if = pressed
        if (this.value === '=') {
            arrN.push(Number(cur));
            cur = calculate(arrN, arrO);
            $('#calcWin').val(cur);
            arrN = [cur];
            arrO = [];
            showTotal(totalString + '=' + cur);
            totalString = cur.toString();
            cur = "";
        }
        //if Clear element pressed
        if (this.value === "CE") {
            totalString = totalString.substring(0, totalString.length - cur.length);
            cur = "";
            $('#calcWin').val('0');
            showTotal(totalString);
        }
        
        console.log(totalString);
        console.log(arrN);
        console.log(arrO);
        
    });
    $('#loadWin').addClass('hidden');
    $('#mainWin').removeClass('hidden');
    $('#errWin').addClass('hidden');
    console.log("ready!");
});