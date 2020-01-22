//fun bus image resize

const funBusImage = document.querySelector('.container .intro img');
    funBusImage.addEventListener('mouseenter', (e) => {
        event.target.style.transform = 'scale(1.1)';
        event.target.style.transition = 'all 1.0s';
    });

funBusImage.addEventListener('mouseleave', (e) => {
    event.target.style.transform = 'scale(1)'
});


//----------------------------------------------------------------------------------
//nav color change


const navColorChange = document.querySelector('.main-navigation');
    navColorChange.addEventListener('mouseenter', (e) => {
        event.target.style.backgroundColor = '#0ec0b1';
    });


//---------------------------------------------------------------------------------
//event handlers


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

const eventHandlerThree = event => {
    event.target.style.transition = 'all 2.5s';
    event.target.style.opacity = '0';
};


//------------------------------------------------------------------------------------
//header color changes


const header2ColorChange = document.querySelectorAll('.container h2');
    header2ColorChange.forEach(header2 => {
        header2.addEventListener('click', eventHandlerOne);
    })


const header4ColorChange = document.querySelectorAll('.container h4');
    header4ColorChange.forEach(header4 => {
        header4.addEventListener('click', eventHandlerTwo);
    })


//-----------------------------------------------------------------------------------
    //adventure image dissapear

    const adventureImage = document.querySelector('.img-content img');
    adventureImage.addEventListener('mouseenter', (e) => {
        event.target.style.transform = 'scale(0)';
        event.target.style.transition = 'all 2.0s';
    });

adventureImage.addEventListener('mouseleave', (e) => {
    event.target.style.transform = 'scale(1)'
});


    //-----------------------------------------------------------------------------------
    //fun image dissapear

    const funImage = document.querySelector('.img-fluid');
    funImage.addEventListener('mouseenter', (e) => {
        event.target.style.transform = 'scale(4)';
        event.target.style.transition = 'all 1.25s';
        event.target.style.opacity = '0';
    });

funImage.addEventListener('mouseleave', (e) => {
    event.target.style.transform = 'scale(1)'
    event.target.style.opacity = '100';
});


//---------------------------------------------------------------------------------------
//dissapearing p tags


const fadingParagraphs = document.querySelectorAll('.container p');
    fadingParagraphs.forEach(ptags => {
        ptags.addEventListener('click', eventHandlerThree);
    })