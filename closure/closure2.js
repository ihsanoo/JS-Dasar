function init() {
    const name = 'obi wan';

    function greet() {
        console.log(`Halo, ${name}`);
    }
    return greet;
}

const myFunction = init();
myFunction();