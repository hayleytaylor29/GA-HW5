// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
// }else{
//     console.log('I did it! I linked jQuery to this js file!');
// }
$(() => {
    
    const $container = $('#container');
        console.log($container);

    const addH1 = () => {
        const $h1 = $('<h1>').text('Hogwarts');
        $('#container').append($h1);
        console.log($h1);
    }
    const addH2 = () => {
        const $h2 = $('<h2>').text('Hayley');
        $('#container').append($h2);
        console.log($h2);
    }
    const addH3 = () => {
        const $h3 = $('<h3>').text('Hufflpuff');
        $('#container').append($h3);
        console.log($h3);
    }
    const addH4 = () => {
        const $h4 = $('<h4 class="cat">').text('Jade');
        $('#container').append($h4);
        console.log($h4);
    }
    
    const addH41 = () => {
        const $h4 = $('<h4>').text('Holly Wand with Unicorn Hair Core');
        $('#container').append($h4);
        console.log($h4);
    }   
    
    addH1();
    addH2();
    addH3();
    addH4();
    addH41();

});
