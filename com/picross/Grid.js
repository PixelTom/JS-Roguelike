/**
* @author       Thomas Gattenhof <tom@pixeltom.net>
* @copyright    2014 Thomas Gattenhof
*/

/**
* Grid object, holding all Tiles
* 
* @class Picross.Grid
* @constructor // extends Phaser.Group
*
*
*/

// JSLint globals, variables defined in other files so JSLint stops warning you about them
/*global Picross, Phaser, console, game*/

//===================================================================================0
//
//===================================================================================0
Picross.Grid = function (game) {
    'use strict';
    
    Phaser.Group.call(this, game);
    
    this.x = 100;
    this.y = 150;
    
	console.log('Picross.Grid constructed.');

};

Picross.Grid.prototype = Object.create(Phaser.Group.prototype);
Picross.Grid.prototype.constructor = Picross.Grid;

//===================================================================================0
//
//===================================================================================0
Picross.Grid.prototype.loadGrid = function (width, height) {
    'use strict';
    
    console.log('Picross.Grid.loadGrid(' + width + ', ' + height + ');');
    var tWidth, tHeight, tile, txt;
    
    
    for (tHeight = 0; tHeight < height; tHeight += 1) {
        txt = this.game.add.text(-50, 10 + (50 * tHeight), String(tHeight), {}, this);
        game.control.CalculateRow(game.JSON.puzzle.GRID[tHeight]);
        for (tWidth = 0; tWidth < width; tWidth += 1) {
            if (tHeight === 0) {
                txt = this.game.add.text(17 + (50 * tWidth), -50, String(tWidth), {}, this);
            }
            tile = new Picross.Tile(this.game, 50 * tWidth, 50 * tHeight);
            this.addChild(tile);
        }
    }
};