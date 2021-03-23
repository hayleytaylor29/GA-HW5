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
    const addList = () => {
        const $trunk = $('<ul class="list">').attr('storage', 'trunk');
        $('#container').append($trunk);
        $trunk.append('<li>butter beer</li>', 
        '<li class="secret">invisibility cloak</li>',
        '<li class="secret">magic map</li>',
        '<li class="secret">time turner</li>',
        '<li class="cat">leash</li>',
        "<li>Bertie Bott's Every Flavor [Jelly] Beans</li>"
        );
    }
    
    const addH5 = () => {
        const $h5 = $('<h5>').text('Spring 2017');
        $('#container').append($h5);
        console.log($h5);
    }

    //So I know there must be a way to make this shorter, and I wasn't able
    //to get the borders right. I feel like I'm really close though!
    const addTable = () =>{
        const $table = $('<table>').addClass('table');
        $('#container').append($table);
        const $thead = $('<thead>');
        $table.append($thead);
        const $th1 = $('<th>').addClass('th').text('Day');
        $thead.append($th1);
        const $th2 = $('<th>').addClass('th').text('Classes');
        $thead.append($th2);
        const $tr1 = $('<tr>');
        $thead.append($tr1);
        const $td1 = $('<td>').addClass('td').text('Monday');
        $tr1.append($td1);
        const $td11 = $('<td>').addClass('td').text('Tuesday');
        $td1.append($td11);
        const $td12 = $('<td>').text('Wednesday');
        $td11.append($td12);
        const $td13 = $('<td>').text('Thursday');
        $td12.append($td13);
        const $td14 = $('<td>').text('Friday');
        $td13.append($td14);
        const $td2 = $('<td>').text('Herbology');
        $tr1.append($td2);
        const $td3 = $('<td>').text('Divination');
        $td2.append($td3);
        const $td4 = $('<td>').text('History of Magic');
        $td3.append($td4);
        const $td5 = $('<td>').text('Charms');
        $td4.append($td5);
        const $td6 = $('<td>').text('Potions');
        $td5.append($td6);
        console.log($table);
    }

    addH1();
    addH2();
    addH3();
    addH4();
    addH41();
    addList();
    addH5();
    addTable();
});
