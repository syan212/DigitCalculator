//Number insertion
function insert(num){
                document.form.textview.value = document.form.textview.value + num;
           }
//Equal
function equal(){
                var exp = document.form.textview.value;
                if (eval(exp)==NaN){
                            document.form.textview.value = "Syntax error";
                }
                if (exp){
                    document.form.textview.value = eval(exp);
                }
}
 //Clear
function clean(){
              document.form.textview.value = " ";
            }
 //Backspace
function back(){
                var exp = document.form.textview.value;
                document.form.textview.value = exp.substring(0,exp.length-1);
            }
//Sin,cos,tan
function sin(x){
              document.form.textview.value = Math.sin(x * Math.PI / 180);
}
function cos(x){
              document.form.textview.value = Math.cos(x * Math.PI / 180);
}
function tan(x){
              document.form.textview.value = Math.tan(x * Math.PI / 180);
}
//Square roots
function sqrt(x){
              document.form.textview.value = Math.sqrt(x);
}
//Cubic root
function cbrt(x){
              document.form.textview.value = Math.cbrt(x);
}
//Factorials
function fact(num) {
  if (num === 0 || num === 1)
    document.form.textview.value = 1;
  for (var i = num - 1; i >= 1; i--) {
    num *= i;
  }
  document.form.textview.value = num;
}
//Negative
function neg(x){
      x = x-x*2;
      document.form.textview.value = x;
}
//Logs
function ln(x){
      document.form.textview.value = Math.log(x);
}
function logten(x){
      document.form.textview.value = Math.log10(x);
}
function logtwo(x){
      document.form.textview.value = Math.log2(x);
}
//1/x
function over(x){
      document.form.textview.value = 1/x;
}
//10 to the power of x
function tenpower(x){
     document.form.textview.value = 10**x;
}
//e to the power of x
function epower(x){
     document.form.textview.value = Math.E**x;
}
//Complex mode
function complex() {
    //Checkbox
    var checkBox = document.getElementById("complexcheck");
    //Text
    var text = document.getElementById("complex");
    //If statement
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}
