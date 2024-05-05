document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('changeTextBtn').addEventListener('click', function() {
        var heading = document.querySelector('h1');
        heading.textContent = 'Well done!';
//        heading.style.backgroundColor = "#FF6347"; // Change background color of h1
	document.body.style.backgroundColor = "#FF6437";
    });
});
