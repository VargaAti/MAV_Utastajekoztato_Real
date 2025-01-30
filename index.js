function ido() // Idő beállítása
{
    let datum = new Date();
    let masodperc = datum.getSeconds();
    let perc = datum.getMinutes();
    let ora = datum.getHours();
    if (ora<10)
    {
        ora = "0"+ora;
    }
    if (perc<10)
        {
        perc = "0"+perc;
    }
    if (masodperc<10)
    {
        masodperc = "0"+masodperc;
    }
    document.getElementById("ido").innerHTML = ora + ":" + perc + ":" + masodperc; 
}
setInterval(ido,1000); // Idő fríssítési ráta