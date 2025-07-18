window.onload = function() {

    const nama = prompt("Masukkan nama Anda:");
    if (nama) {
        document.getElementById("nama-pengguna").innerText = nama;
    } else {
        document.getElementById("nama-pengguna").innerText = "Guest";
    }

    const messageForm = document.getElementById("message-form");
    messageForm.addEventListener("submit", function(event) {
        event.preventDefault();
        const namaInput = document.getElementById("nama").value;
        const emailInput = document.getElementById("email").value;
        const teleponInput = document.getElementById("telepon").value;
        const pesanInput = document.getElementById("pesan").value;

        if (!namaInput || !emailInput || !teleponInput || !pesanInput) {
            alert("Semua kolom harus diisi!");
            return;
        }

        const currentTime = new Date().toLocaleString('id-ID', { dateStyle: 'full', timeStyle: 'long' });

        document.getElementById("display-time").innerText = currentTime;
        document.getElementById("display-nama").innerText = namaInput;
        document.getElementById("display-email").innerText = emailInput;
        document.getElementById("display-telepon").innerText = teleponInput;
        document.getElementById("display-pesan").innerText = pesanInput;

        messageForm.reset();
    });

    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

};