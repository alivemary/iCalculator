$(document).ready(function () {
    var totalString = "";
    var numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    var opers = ['+', '-', '*', '/'];
    var arrN = [];
    var arrO = [];
    var cur = '';
    
    function calculate(arr1, arr2) {
        //var nums = str.match(/[0-9]+/g);
        //var operators = str.match(/[\+\-\/\*]+/g);
        //console.log(nums);
        //console.log(operators);
        var result = arr1[0];
        for (var i = 0; i < arr2.length; i++) {
            switch (arr2[i]) {
                case '+': result += arr1[i + 1]; break;
                case '-': result -= arr1[i + 1]; break;
                case '*': result *= arr1[i + 1]; break;
                case '/': result /= arr1[i + 1]; break;
            }
        }
        return result;
        
    }

    $('button').on("click", function () {
        if (numbers.indexOf(this.value) !== -1) {
            cur += this.value;
            totalString += this.value;
            $('#calcWin').val(cur);
            $('#totalWin').val(totalString);
        }
        if (opers.indexOf(this.value) !== -1) {
            arrO.push(this.value);
            if (arrN.length < arrO.length) arrN.push(Number(cur));
            cur = "";
            totalString += this.value;
            $('#totalWin').val(totalString);
        }
        if (this.value === "AC") {
            cur = "";
            arrN = [];
            arrO = [];
            totalString = "";
            $('#calcWin').val('0');
            $('#totalWin').val(totalString);
        }
        if (this.value === '=') {
            arrN.push(Number(cur));
            cur = calculate(arrN, arrO);
            $('#calcWin').val(cur);
            $('#totalWin').val(totalString+'='+cur);
            arrN = [calculate(arrN, arrO)];
            arrO = [];
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