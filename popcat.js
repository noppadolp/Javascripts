var keypressed = new KeyboardEvent('keydown', {
    key: 'g',
    ctrlKey : true
});

setInterval(function(){
    for(i = 0; i < 100; i++) {
        document.dispatchEvent(keypressed);
    }
}, 0);