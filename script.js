const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('open');
            }, 300);
        } else {
            entry.target.classList.remove('open');
        }
    });
});

const posters = document.querySelectorAll('.poster');

posters.forEach(poster => {
    observer.observe(poster);
});