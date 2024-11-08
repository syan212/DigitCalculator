//Number insertion
function insert(num){
                document.form.textview.value = document.form.textview.value + num;
           }
//Equal
function equal(){
                var exp = document.form.textview.value;
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
//Complex mode
function myFunction(id,pid) {
    //Checkbox
    var checkBox = document.getElementById(id);
    //Text
    var text = document.getElementById(pid);
    //If statement
    if (checkBox.checked == true){
        text.style.display = "block";
    } else {
       text.style.display = "none";
    }
}


