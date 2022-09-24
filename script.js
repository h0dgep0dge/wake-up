function start() {
    setInterval(function() {
        const Http = new XMLHttpRequest();
        const url='./booted.php';
        Http.open("GET", url);

        Http.onreadystatechange = function() {
            if(this.readyState==4 && this.status == 200) {
                var booted = JSON.parse(this.responseText);
                document.getElementById('booted').innerHTML = booted?"Booted!":"Shut down!";
                //console.log(this.responseText);
            }
        }
                
        Http.send();
    },1000);


    document.getElementById('wake').addEventListener('click',function() {
        const Http = new XMLHttpRequest();
        const url='./wol.php';
        Http.open("GET", url);
        Http.send();
    });
}

