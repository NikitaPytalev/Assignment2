//import {}
let input;

console.log('Welcome to the File Manager, Username!');

process.stdin.on('data', chunk => {
    const chunkToString = chunk.toString().trim()
    if(chunkToString === ".exit") {
        process.exit();
    }

    console.log('Input: ' + chunk);

    let path_to_working_directory = '/';
    console.log(`You are currently in ${path_to_working_directory}`)
});

process.on('SIGINT', function() {
    console.log('Thank you for using File Manager, Username!');
    process.exit();
});