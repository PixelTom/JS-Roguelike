/**
* @author       Thomas Gattenhof <tom@pixeltom.net>
* @copyright    2015 Thomas Gattenhof
*/

/**
* The text guide appears at the left and the top of the grid
* Indicates what tiles occur in their row / column, and reacts when the tiles are filled in with crosses and such
*
* @class Picross.TextGuide
* @constructor
*/

// JSLint globals, variables defined in other files so JSLint stops warning you about them
/*global Picross, console, Phaser, game */

//===================================================================================0
//
//===================================================================================0
Picross.TextGuide = function (game, x, y) {
    'use strict';
    
    Phaser.Sprite.call(this, game, x, y);
    
}

Picross.TextGuide.prototype = Object.create(Phaser.Sprite.prototype);
Picross.TextGuide.prototype.constructor = Picross.TextGuide;