/**
* @author       Thomas Gattenhof <tom@pixeltom.net>
* @copyright    2014 Thomas Gattenhof
*/

/**
* Group object, holding all Paint buckets
* 
* @class Picross.BucketGroup
* @constructor // extends Phaser.Group
*
*
*/

// JSLint globals, variables defined in other files so JSLint stops warning you about them
/*global Picross, Phaser, console*/

//===================================================================================0
//
//===================================================================================0
Picross.BucketGroup = function (game, colourArray) {
    'use strict';
    
    var i, bucket;
    
    Phaser.Group.call(this, game);
    
    this.x = 30;
    this.y = 840;
    
    // Always add White at the start, replace with ERASE icon
    colourArray.unshift(game.utils.WHITE);
    
    for (i = 0; i < colourArray.length; i += 1) {
        bucket = new Picross.PaintBucket(game, colourArray[i], 120 * i, 0);
        this.addChild(bucket);
    }
};

Picross.BucketGroup.prototype = Object.create(Phaser.Group.prototype);
Picross.BucketGroup.prototype.constructor = Picross.Grid;