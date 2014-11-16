// The Grid component allows an element to be located
//  on a grid of tiles
// An "Actor" is an entity that is drawn in 2D on canvas
//  via our logical coordinate grid

Crafty.c('Grid', {
	init: function () {
		this.attr({
			w: Game.map_grid.tile.width,
			h: Game.map_grid.tile.height
		})
	},

	  // Locate this entity at the given position on the grid
  	at: function(x, y) {
    	if (x === undefined && y === undefined) {
      		return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
    	} 
    	else {
      		this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
      		return this;
    	}
  	}
})
Crafty.c('Actor', {
    init: function() {
        this.requires('2D, Canvas, Grid');
    },
});

Crafty.c('Ground', {
	init: function() {
		this.requires('Actor, Color, Solid, Collision')
			.color('green')
	}
});

Crafty.c('Portal', {
	init: function() {
		this.requires('Actor, Color, Portal')
			.color('blue')
			.attr({x: 100, y: 100, w: 50, h: 50});
	}
})

Crafty.c('Hazard', {
	init: function() {
		this.requires('Actor, Color, Hazard, Solid')
			.color('orange')
	}
})

Crafty.c('Boundary', {
	init: function() {
		this.requires('Actor, Color, Boundary')
			.color('blue')
	}
})

Crafty.c('Replay', {
	init:function() {
		this.requires('2D, Canvas, Text')
			.attr({x: 12*90, y: 7.5*90, w: 250, h: 250})
			.text("GAME OVER")
			.textColor ('black')
	}
})
