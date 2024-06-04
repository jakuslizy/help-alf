describe("Function findSpaceship", function() {
    let finder;

    beforeEach(function() {
        finder = new findSpaceship();
    });

    it('should return coordinates[0, 0] for a spaceship located in a 1x1 map', function() {
        var map = "X";
        expect(finder.checkMap(map)).toEqual([0, 0]);
    });

    it('should return coordinates[0, 0] in a 5x5 map', function() {
        var map = "..........\n..........\n..........\n..........\n..........\nX.........";
        expect(finder.checkMap(map)).toEqual([0, 0]);
    });

    it('should return coordinates [0, 0] when the spaceship is located at the bottom-left corner of the map', function() {
        var map = "..........\n..........\n..........\n..........\n..........\nX.........";
        expect(finder.checkMap(map)).toEqual([0, 0]);
    });

    it('should return coordinates [2, 7] for a spaceship located near the bottom-right of the map', function() {
        var map = "..........\n..........\n..........\n.......X..\n..........\n..........";
        expect(finder.checkMap(map)).toEqual([2, 7]);
    });

    it('should return "Spaceship lost forever." when there is no spaceship on the map', function() {
        var map = "..........\n..........\n..........\n..........\n..........";
        expect(finder.checkMap(map)).toEqual("Spaceship lost forever.");
    });

    it('should return "Spaceship lost forever." when the map contains invalid characters', function() {
        var map = "..........\n......Y...\n..........\n..........\n..........";
        expect(finder.checkMap(map)).toEqual("Spaceship lost forever.");
    });

    it('should return "Spaceship lost forever." when the map is empty', function() {
        var map = "";
        expect(finder.checkMap(map)).toEqual("Spaceship lost forever.");
    });

})