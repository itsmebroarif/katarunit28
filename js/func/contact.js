/* contact.js - Kirim pesan ke WhatsApp */

function sendToWA() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;
    const phoneNumber = SITE_CONFIG.whatsappNumber;
    const t = translations[currentLang];

    if (!name || !message) {
        Swal.fire({
            title: t.swal_empty_title, text: t.swal_empty_text, icon: 'error',
            confirmButtonColor: 'var(--hs-border)', background: 'var(--hs-white)',
            customClass: { popup: 'omori-box', confirmButton: 'action-btn' }
        }).then(() => playClickSound());
        return;
    }

    Swal.fire({
        title: t.swal_send_title, text: t.swal_send_text, icon: 'question',
        showCancelButton: true, confirmButtonColor: 'var(--hs-border)', cancelButtonColor: 'var(--hs-red)',
        confirmButtonText: t.swal_btn_yes, cancelButtonText: t.swal_btn_no,
        customClass: { popup: 'omori-box', confirmButton: 'action-btn', cancelButton: 'action-btn' }
    }).then((result) => {
        playClickSound();
        if (result.isConfirmed) {
            const fullMessage = `Halo Karang Taruna!%0ANama: ${name}%0APesan: ${message}`;
            window.open(`https://wa.me/${phoneNumber}?text=${fullMessage}`, '_blank');
        }
    });
}
