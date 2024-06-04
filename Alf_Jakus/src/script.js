function findSpaceship() {}

findSpaceship.prototype.checkMap = function(map) {
    const rows = map.split("\n");
    const totalRows = rows.length;

    for (let i = 0; i < totalRows; i++) {
        const col = rows[i].indexOf('X');
        if (col !== -1) {
            return [totalRows - i - 1, col]; 
        }
    }
    return 'Spaceship lost forever.';
}