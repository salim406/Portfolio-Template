//button (id)
// abtme
// skil
// portfo
// serv
// conta


// screen (class)

// mainscreen
// aboutscreen
// skillbox
// portfoliobox
// servicebox
// contactbox





$(document).ready(function () {

    $('.aboutphoto img').contextmenu(function () {
        $(this).hide();
    })


    $('#abtme').click(function () {
        $(this).css('background', 'rgb(208, 255, 0)');
        $('.menuarea ul li:gt(0)').css('background', '');
        $('.aboutphoto img').fadeOut(1000).fadeIn(1000).slideUp(1000).slideDown(1000);
        $('.aboutrightpart').animate({ right: '50px' }, 3000);
        $('.aboutrightpart').animate({ right: '0px' }, 1000);
        $('.mainscreen').hide();
        $('.aboutscreen').show();
    });
    $('#skil').click(function () {
        $(this).css('background', 'rgb(255, 255, 255)');
        $('.menuarea ul li:gt(1), .menuarea ul li:lt(1) ').css('background', '');
        $('.mainscreen, .aboutscreen').hide();
        $('.skillbox').show();
    });
    $('#portfo').click(function () {
        $(this).css('background', 'rgb(208, 255, 0)');
        $('.menuarea ul li:gt(2), .menuarea ul li:lt(2) ').css('background', '');
        $('.mainscreen , .aboutscreen,.skillbox').hide();
        $('.portfoliobox').show();
    });
    $('#serv').click(function () {
        $(this).css('background', 'rgb(255, 255, 255)');
        $('.menuarea ul li:gt(3), .menuarea ul li:lt(3) ').css('background', '');
        $('.mainscreen , .aboutscreen,.skillbox, .portfoliobox').hide();
        $('.servicebox').show();
    });
    $('#conta').click(function () {
        $(this).css('background', 'rgb(208, 255, 0)');
        $('.menuarea ul li:gt(4), .menuarea ul li:lt(4) ').css('background', '');
        $('.mainscreen , .aboutscreen,.skillbox,.portfoliobox , .servicebox').hide();
        $('.contactbox').show();
    });

    //btn er kaj ses

    //skill box er kaj

    $('.box1').mouseenter(function () {
        $(this).css('background', 'yellow');
        $('.box1 p').hide(3000);

        $('.box1 .skillcon').show(3000);
    });
    $('.box1').mouseleave(function () {
        $(this).css('background', '');
        $('.box1 p').show(3000);
        $('.box1 .skillcon').hide(3000);
    });

    $('.box2').mouseenter(function () {
        $(this).css('background', 'green');
        $('.box2 p').hide(3000);
    
        $('.box2 .skillcon').show(3000);
    });
    $('.box2').mouseleave(function () {
        $(this).css('background', '');
        $('.box2 p').show(3000);
        $('.box2 .skillcon').hide(3000);
    });

    $('.box3').mouseenter(function () {
        $(this).css('background', 'salmon');
        $('.box3 p').hide(3000);
    
        $('.box3 .skillcon').show(3000);
    });
    $('.box3').mouseleave(function () {
        $(this).css('background', '');
        $('.box3 p').show(3000);
        $('.box3 .skillcon').hide(3000);
    });

    $('.box4').mouseenter(function () {
        $(this).css('background', 'pink');
        $('.box4 p').hide(3000);
    
        $('.box4 .skillcon').show(3000);
    });
    $('.box4').mouseleave(function () {
        $(this).css('background', 'skyblue');
        $('.box4 p').show(3000);
        $('.box4 .skillcon').hide(3000);
    });

    $('.box5').mouseenter(function () {
        $(this).css('background', 'yellow');
        $('.box5 p').hide(3000);
    
        $('.box5 .skillcon').show(3000);
    });
    $('.box5').mouseleave(function () {
        $(this).css('background', '');
        $('.box5 p').show(3000);
        $('.box5 .skillcon').hide(3000);
    });

    $('.box6').mouseenter(function () {
        $(this).css('background', 'skyblue');
        $('.box6 p').hide(3000);
    
        $('.box6 .skillcon').show(3000);
    });
    $('.box6').mouseleave(function () {
        $(this).css('background', '');
        $('.box6 p').show(3000);
        $('.box6 .skillcon').hide(3000);
    });

    $('.box7').mouseenter(function () {
        $(this).css('background', 'yellow');
        $('.box7 p').hide(3000);
    
        $('.box7 .skillcon').show(3000);
    });
    $('.box7').mouseleave(function () {
        $(this).css('background', '');
        $('.box7 p').show(3000);
        $('.box7 .skillcon').hide(3000);
    });

    $('.box8').mouseenter(function () {
        $(this).css('background', 'yellow');
        $('.box8 p').hide(3000);
    
        $('.box8 .skillcon').show(3000);
    });
    $('.box8').mouseleave(function () {
        $(this).css('background', '');
        $('.box8 p').show(3000);
        $('.box8 .skillcon').hide(3000);
    });

    $('.box9').mouseenter(function () {
        $(this).css('background', 'yellow');
        $('.box9 p').hide(3000);
    
        $('.box9 .skillcon').show(3000);
    });
    $('.box9').mouseleave(function () {
        $(this).css('background', '');
        $('.box9 p').show(3000);
        $('.box9 .skillcon').hide(3000);
    });

    $('.box10').mouseenter(function () {
        $(this).css('background', 'yellow');
        $('.box10 p').hide(3000);
    
        $('.box10 .skillcon').show(3000);
    });
    $('.box10').mouseleave(function () {
        $(this).css('background', '');
        $('.box10 p').show(3000);
        $('.box10 .skillcon').hide(3000);
    });

    $('.box11').mouseenter(function () {
        $(this).css('background', 'yellow');
        $('.box11 p').hide(3000);
    
        $('.box11 .skillcon').show(3000);
    });
    $('.box11').mouseleave(function () {
        $(this).css('background', '');
        $('.box11 p').show(3000);
        $('.box11 .skillcon').hide(3000);
    });

    $('.box12').mouseenter(function () {
        $(this).css('background', 'yellow');
        $('.box12 p').hide(3000);
    
        $('.box12 .skillcon').show(3000);
    });
    $('.box12').mouseleave(function () {
        $(this).css('background', '');
        $('.box12 p').show(3000);
        $('.box12 .skillcon').hide(3000);
    });
});

