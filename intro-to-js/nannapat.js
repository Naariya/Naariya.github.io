function askMyName() {
    const name = prompt("What is your name?");

    if (name != null) {
        document.getElementById("myname").innerHTML = "My name is " + name;
    }
 }
 
 function helloWorld() {
 const h1message = document.getElementById("myname").innerHTML
    alert(h1message + ' เมาเหล้าเสียหลัก เมารักเสียใจ')
 }