document.addEventListener('DOMContentLoaded', function () {
    const generateButton = document.getElementById('generateButton');
    const qrCodeContainer = document.getElementById('qrCodeContainer');

    generateButton.addEventListener('click', function () {
        const input = document.getElementById('qrInput').value.trim();
        if (input === '') {
            alert('Please enter text or a URL to generate a QR code.');
            return;
        }

        // Use a QR Code library like "qrcode-generator"
        const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(input)}`;
        qrCodeContainer.innerHTML = `<img src="${qrCodeUrl}" alt="QR Code">`;
    });
});