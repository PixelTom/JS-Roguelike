/**
* @author       Thomas Gattenhof <tom@pixeltom.net>
* @copyright    2014 Thomas Gattenhof
*/

/**
* A Tile is a single clickable tile in the Picross Grid.
*
* @class Picross.Tile
* @constructor
* @param {number} x - X position of the Tile in the Grid
* @param {number} y - Y position of the Tile in the Grid
* @param {number} id - Internal ID number
*/

// JSLint globals, variables defined in other files so JSLint stops warning you about them
/*global Picross, console, Phaser, game */
/*global beginFill, continueFill */

//===================================================================================0
//
//===================================================================================0
Picross.Tile = function (game, x, y) {
    'use strict';
    
    Phaser.Sprite.call(this, game, x, y);
    
    this.game = game;
	this.gridX = x;
	this.gridY = y;
	this.id = String(x) + '_' + String(y);
    this.inputEnabled = true;
    this.downColour = game.utils.randomHex();
    this.lastFillID = -1;
    
    this.graph = game.add.graphics(0, 0);
    this.graph.lineStyle(2, 0x000000);
    this.graph.beginFill(game.utils.WHITE);
    this.graph.drawRect(0, 0, 50, 50);
    this.graph.endFill();
    
    this.addChild(this.graph);
    
    this.events.onInputDown.add(beginFill, this);
    this.events.onInputOver.add(continueFill, this);
};

Picross.Tile.prototype = Object.create(Phaser.Sprite.prototype);
Picross.Tile.prototype.constructor = Picross.Tile;

//===================================================================================0
//
//===================================================================================0
var beginFill = function (sprite, pointer) {
    'use strict';
    
    this.game.control.beginFill();
    sprite.attemptFill();
};

//===================================================================================0
//
//===================================================================================0
var continueFill = function (sprite, pointer) {
    'use strict';
    
    if (!pointer.isDown) {
        return;
    }
    sprite.attemptFill();
};

//===================================================================================0
//
//===================================================================================0
Picross.Tile.prototype.attemptFill = function () {
    'use strict';
    
    if (this.game.control.fillID === this.lastFillID) {
        return;
    }
    
    if (this.graph.tint !== this.game.control.paintColour) {
        this.graph.tint = this.game.control.paintColour;
    }
    
    this.lastFillID = this.game.control.fillID;
};

