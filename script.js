document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeTextBtn').addEventListener('click', function() {
        var heading = document.querySelector('h1');
        heading.textContent = 'Well done!';
	document.body.style.backgroundColor = "#FF6437";
    });
});
