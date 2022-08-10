'use strict'

window.addEventListener('load', () =>{

    const burger = document.querySelector('.banner-header-right-burger');
    const menu = document.querySelector('.banner-header-right-nav');
    const close = document.querySelector('.banner-header-right-close');
    const ulHeight = document.querySelector('.banner-header-right-nav-ul');
    // menu.style.display = 'none';
    close.style.display = 'none';
    if (screen.width > 768) {
        menu.style.visibility = 'visible';
    } else {
        menu.style.visibility = 'hidden'
    }



    burger.addEventListener('click', () => {
        console.log('click');
        if (menu.style.visibility == 'hidden') {
            // menu.style.display = 'flex';
            menu.style.visibility = 'visible';
            menu.style.height = '100vh';
            ulHeight.style.height = '35%';
            close.style.display = 'block';
            burger.style.display = 'none';
        } else {
            close.style.display = 'none';
            burger.style.display = 'block';
        }
        return true;
    });

    close.addEventListener('click', () =>{
        menu.style.visibility = 'hidden';
        menu.style.height = '0';
        ulHeight.style.height = '0';
        close.style.display = 'none';
        burger.style.display = 'block'
    });
    

    window.addEventListener('resize', function() {
        const widthWindow = screen.width;
        collapsedMenu(widthWindow);
        console.log(widthWindow);
    })


    function collapsedMenu( width ) {
        if (width > 786) {
            menu.style.visibility = 'visible';
            burger.style.display = 'none';
            // const navNew = document.querySelector('nav');
            // const headerImg = document.querySelector('header img');
            // // const div = document.createElement('div.navi');
            // console.log(headerImg);
            // headerImg.after(nav);
        } else {
            menu.style.visibility = 'hidden';
            burger.style.display = 'block';
        }
    }




});