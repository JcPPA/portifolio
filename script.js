// JavaScript
document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function(event) {
            if (!event.target.classList.contains('learn-more')) {
                return;
            }
            
            const isExpanded = this.classList.contains('expanded');

            if (!isExpanded) {
                cards.forEach(c => {
                    c.classList.remove('expanded');
                });
                this.classList.add('expanded');
                this.style.backgroundColor = 'black';
                this.style.color = 'white';
                const h3 = this.querySelector('h3');
                h3.style.color = 'green';
                h3.style.textTransform = 'uppercase';
                const paragraphs = this.querySelectorAll('p');
                paragraphs.forEach(p => {
                    p.style.textAlign = 'justify';
                });
            } else {
                this.classList.remove('expanded');
                this.style.backgroundColor = '';
                this.style.color = '';
                const h3 = this.querySelector('h3');
                h3.style.color = '';
                h3.style.textTransform = '';
                const paragraphs = this.querySelectorAll('p');
                paragraphs.forEach(p => {
                    p.style.textAlign = '';
                });
            }
        });
    });
});
