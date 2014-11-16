numTeddy = 0;

Crafty.scene('Level_1', function() {
	numTeddy = 3;

    //            0
    //w                  0
    //            h
    var w = Game.map_grid.width;
    var h = Game.map_grid.height;
    //Place some ground on the map
    for (var x = 0; x < w; x++) {
        for (var y = 0; y < h; y++) {
            if (y == h -1) {
                Crafty.e('Ground').at(x,y);
            }
           //if (x > w-20 && x < w-5 && y == h -1) {
               // Crafty.e('Hazard').at(x,y);
         //  }
            if (y > 3 && y < h  && x >  -1  && x < 4) {
                Crafty.e('Ground').at(x, y);
            }
            if (y > 5 && y < h  && x >  5 && x < w-20) {
                Crafty.e('Ground').at(x, y);
            }
            if (y > 6 && y < h  && x >  3 && x < 6) {
                Crafty.e('Ground').at(x, y);
            }
            if (y > 7 && y < h  && x >  1 && x < 4) {
                Crafty.e('Ground').at(x, y);
            }
            // if (y == Game.map_grid.height - 1 && x > 4) {
            //     Crafty.e('Hazard').at(x, y);
            // }
        }
    }

	
    var player1 = Crafty.e('Player1')
		.attr({x: 300, y: 400})
	//Insures Climbing platforms do not cause clipping
	player1.antigravity();
	player1.gravity('Ground');
		
	var player2 = Crafty.e('Player2')
		.attr({x: 160,  y:300})
	//Insures Climbing platforms do not cause clipping
	player2.antigravity();
	player2.gravity('Ground');

	Crafty.e('Enemy')
	.attr({x: 500, y: 300, w: 50, h:50})
	.setDirection(1)

	Crafty.e('Boy')
	.attr({x: 0, y: 200})

	Crafty.e('teddyBears')
	.attr({x:200,y:100})

	Crafty.e('teddyBears')
	.attr({x:200,y:100})

	Crafty.e('teddyBears')
	.attr({x:200,y:100})


      this.nextLevel = this.bind('NextLevel', function() {
        Crafty.scene('Level_2');
    });
});

Crafty.scene('Level_2', function() {
	//Place some ground on the map
	for (var x = 0; x < Game.map_grid.width; x++) {
		for (var y = 0; y < Game.map_grid.height; y++) {
			if (y == Game.map_grid.height - 1 && x <= 4) {
				Crafty.e('Ground').at(x, y);
			}
			if (y == Game.map_grid.height - 1 && x > 4) {
				Crafty.e('Hazard').at(x, y);
			}
		}
	}
});
