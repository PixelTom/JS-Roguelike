/**
* @author       Thomas Gattenhof <tom@pixeltom.net>
* @copyright    2015 Thomas Gattenhof
*/

/**
* The Paintbucket is a clickable sprite that changes the colour to paint the tiles
*
* @class Picross.PaintBucket
* @constructor
*/

// JSLint globals, variables defined in other files so JSLint stops warning you about them
/*global Picross, console, Phaser, game, PIXI, tileTapped */

//===================================================================================0
//
//===================================================================================0
Picross.PaintBucket = function (game, colour, x, y) {
    'use strict';
    
    Phaser.Sprite.call(this, game, x, y);
    
    this.colour = colour;
    this.inputEnabled = true;
    
    this.graph = game.add.graphics(0, 0);
    this.graph.lineStyle(2, game.utils.BLACK);
    this.graph.beginFill(colour);
    this.graph.drawCircle(50, 50, 100);
    this.graph.endFill();
    
    this.addChild(this.graph);
    
    this.events.onInputUp.add(assignColour, this);
};

Picross.PaintBucket.prototype = Object.create(Phaser.Sprite.prototype);
Picross.PaintBucket.prototype.constructor = Picross.PaintBucket;

var assignColour = function (sprite, pointer) {
    'user strict';
    console.log("this.colour" + this.colour);
    this.game.control.paintColour = this.colour;
}