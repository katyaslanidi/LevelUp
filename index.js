const reviews = document.querySelectorAll('.slider__review');
const controlls = document.querySelectorAll('.controlls');
let reviewIndex = 0;

function show(index) {
    reviews[reviewIndex].classList.remove('active');
    reviews[index].classList.add('active');
    reviewIndex = index;
}

controlls.forEach((e) => {
    e.addEventListener('click', () => {
        if (event.target.classList.contains('prev')) {
            let index = reviewIndex - 1;

            if (index < 0) {
                index = reviews.length - 1;
            }

            show(index);
        } else if (event.target.classList.contains('next')) {
            let index = reviewIndex + 1;
            if (index >= reviews.length) {
                index = 0;
            }
            show(index);
        }
    })
})

show(imageIndex);
