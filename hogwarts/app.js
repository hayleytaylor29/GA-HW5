// if (typeof jQuery == 'undefined'){
//     console.log('oops! I still have to link my jQuery properly!');
// }else{
//     console.log('I did it! I linked jQuery to this js file!');
// }
$(() => {
    
    const addContainer = () => {
        const $container = '';
        $('#container').append($container);
        console.log($container);
    }

    const addH1 = () => {
        const $h1 = $('<h1>').text('Hogwarts');
        $('#container').append($h1);
        console.log($h1);
    }
    addContainer();    
    addH1();
    
});
