document.addEventListener('DOMContentLoaded', function () {
    const compressButton = document.getElementById('compressButton');
    const downloadLink = document.getElementById('downloadLink');

    compressButton.addEventListener('click', function () {
        const fileInput = document.getElementById('imageInput');
        const file = fileInput.files[0];

        if (!file) {
            alert('Please select an image to compress.');
            return;
        }

        const reader = new FileReader();

        reader.onload = function (event) {
            const img = new Image();
            img.src = event.target.result;

            img.onload = function () {
                const canvas = document.createElement('canvas');
                const ctx = canvas.getContext('2d');

                // Reduce image size by 50%
                const width = img.width * 0.5;
                const height = img.height * 0.5;
                canvas.width = width;
                canvas.height = height;

                ctx.drawImage(img, 0, 0, width, height);

                canvas.toBlob(function (blob) {
                    const url = URL.createObjectURL(blob);
                    downloadLink.href = url;
                    downloadLink.download = 'compressed-image.jpg';
                    downloadLink.style.display = 'block';
                }, 'image/jpeg', 0.7); // Quality: 70%
            };
        };

        reader.readAsDataURL(file);
    });
});