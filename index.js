function ido() // Idő beállítása
{
    const now = new Date();
    document.getElementById('ido').textContent = now.toLocaleTimeString();
}
setInterval(ido, 1000);
ido();