fs=require('fs');
fs.writeFile('random.txt','spotify-this-song,"I Want it That Way"', function(error){

    if (error){

        console.log(error);
    }
        console.log('File Created');

});   