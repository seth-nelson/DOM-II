// fun-bus img resie

const funBusImage = document.querySelector('.container .intro img');
    funBusImage.addEventListener('mouseenter', (e) => {
        event.target.style.transform = 'scale(1.1)';
        event.target.style.transition = 'all 1.0s';
    });

funBusImage.addEventListener('mouseleave', (e) => {
    event.target.style.transform = 'scale(1)'
});


const navColorChange = document.querySelector('.main-navigation');
    navColorChange.addEventListener('mouseenter', (e) => {
        event.target.style.backgroundColor = '#0ec0b1';
    });





const eventHandlerOne = event => {
    event.target.style.color = 'red';
    event.target.style.transition = 'all 2.0s';
    event.target.style.transform = 'scale(1.1)';
    event.target.style.transition = 'all 1.0s';
};

const eventHandlerTwo = event => {
    event.target.style.color = 'blue';
    event.target.style.transition = 'all 2.0s';
};





const header2ColorChange = document.querySelectorAll('.container h2');
    header2ColorChange.forEach(header2 => {
        header2.addEventListener('click', eventHandlerOne);
    })


const header4ColorChange = document.querySelectorAll('.container h4');
    header4ColorChange.forEach(header4 => {
        header4.addEventListener('click', eventHandlerTwo);
    })
// headerColorChange.addEventListener('click', (e) => {
//     event.target.style.color = 'yellow';
//     event.target.style.transition = 'all 2.0s';
// });