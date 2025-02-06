function ido() // Idő beállítása
{
    const most = new Date();
    document.getElementById('ido').textContent = most.toLocaleTimeString();
}
setInterval(ido, 1000);
ido();