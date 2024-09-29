// Toggle product info
document.querySelectorAll('.toggle-info').forEach(button => {
    button.addEventListener('click', function() {
        const extraInfo = this.nextElementSibling;
        extraInfo.style.display = extraInfo.style.display === 'block' ? 'none' : 'block';
    });
});

// Scroll to top functionality
const scrollTopBtn = document.getElementById('scrollTopBtn');

window.onscroll = function() {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        scrollTopBtn.style.display = 'block';
    } else {
        scrollTopBtn.style.display = 'none';
    }
};

scrollTopBtn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};
