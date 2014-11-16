door1AddressX = 0;
door1AddressY = 0;
door2AddressX = 0;
door2AddressY = 0;

enteredEnemy = 0;
portalCount = 0;

Crafty.c('Enemy', { 
	speed: 2,
	direction: -1,
	init: function() {
		this.requires('Actor, Color, Gravity, Collision')
		.attr({x: 0, y: 0, w: Game.map_grid.tile.width, h:Game.map_grid.tile.height})
		.color('black')
		.gravity('Solid')
		.gravityConst(.3)
		.switchOnSolids()
		.collidePlayer()
		.collideHazard()
		.collideBoundary()
		.bind("EnterFrame", function() {
			//Move the enemy in the game loop
			//If it hits the edge of the screen
			if (this.x > Crafty.viewport.width - this.w ||
				this.x < 0){
				//Switch directions
				this.switchDirection;
			}
			//Right
			if (this.direction == 1) {
				this.x += this.speed;
			}
			//left
			else {
				this.x -= this.speed;
			}
			if (enteredEnemy == 1 && !this.hit('Player1') && !this.hit('Player2')) {
				enteredEnemy = 0;
			}
		})
	},

	setDirection: function(dir) {
		this.direction = dir;
	},

	switchDirection: function() {
		this.direction *= -1;
	},
	collideBoundary: function() {
		this.onHit('Boundary', this.switchDirection)
		return this;
	},
	collideHazard: function() {
		this.onHit('Hazard', this.enemyDie)
		return this;
	},
	collidePlayer: function() {
	 	this.onHit('Player1', this.player1Hit)
	 	this.onHit('Player2', this.player2Hit)
	 	return this;
	},
	player1Hit: function() {
		if (portalCount == 2 && enteredEnemy == 0) {
			this.x = door2AddressX;
			this.y = door2AddressY;
			enteredEnemy = 1;
		}
		//else if (portalCount != 2 && enteredEnemy == 0){
			//Crafty.trigger('Death1');
		//}
	},
	player2Hit: function() {
		if (portalCount == 2 && enteredEnemy == 0) {
			this.x = door1AddressX;
			this.y = door1AddressY;
			enteredEnemy = 1;
		}
		//else if (portalCount != 2 && enteredEnemy == 0){
			//Crafty.trigger('Death2');
		//}
	},

	enemyDie: function() {
		this.destroy()
	},
	// Registers a stop-movement function to be called when
	// this entity hits an entity with the "Solid" component
	switchOnSolids: function() {
		this.onHit('Solid', this.switchDirection);
		return this;
	},
})
