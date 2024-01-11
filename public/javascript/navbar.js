document.addEventListener("DOMContentLoaded", function () {
    const links = document.querySelectorAll(".navbar .nav-link");

    links.forEach(function (link) {
        // Tambahkan kelas "active" ke link yang sesuai dengan halaman yang sedang aktif
        if (window.location.pathname === link.getAttribute("href")) {
            link.classList.add("active");
        }

        link.addEventListener("click", function (event) {
            event.preventDefault();

            // Hapus kelas "active" dari semua link
            links.forEach(function (item) {
                item.classList.remove("active");
            });

            // Tambahkan kelas "active" ke link yang diklik
            link.classList.add("active");

            // Pindah ke halaman yang sesuai dengan href
            const targetPage = link.getAttribute("href");
            window.location.href = targetPage;
        });
    });
});
