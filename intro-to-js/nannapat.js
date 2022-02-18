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

function calAge() {
    const year = prompt("Tell me your year of birth? (please put it in number.)");
    const age = (2022 - year)
    alert(`Congratulations, You have been the citizen of the world for ${age} years.`)
}

function loadProfile() {
    const firstname = "Nannapat"
    const province = "Bangkok"
    document.getElementById("my-name").innerHTML = firstname;
    document.getElementById("my-province").innerHTML = province;
}
