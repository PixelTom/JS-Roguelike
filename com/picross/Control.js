/**
* @author       Thomas Gattenhof <tom@pixeltom.net>
* @copyright    2015 Thomas Gattenhof
*/

/**
* Control Class, holds important variables and methods for the game, outside of the large game js file
* @param fillID:    Unique ID for fills, counts up each time one starts. This stops tiles from switching in and out of states as the mouse goes over.
*                   They'll switch states once only
*
*/

/*globals Picross, game*/
/*globals input*/

//===================================================================================0
//---- Constructor for the class object
//===================================================================================0
Picross.Control = function (game) {
    'use strict';
    
    this.game = game;
    this.fillID = 0;
};

Picross.Control.prototype.constructor = Picross.Control;
Picross.Control.prototype.fillID = this.fillID; // current fill id, may be obsolete soon with "ERASE" colour
Picross.Control.prototype.paintColour = 0; // Current paint colour to be applied to tiles

//===================================================================================0
//---- Begin the fill ID run, once ERASE is an option this won't be needed
//---- As the way this works is the same colour can cancel out a tile on differing fill IDs
//---- ERASE will just wipe that out, make it either "COLOUR X" or "CLEAR X"
//===================================================================================0
Picross.Control.prototype.beginFill = function () {
    'use strict';
    
    this.fillID += 1;
};

//===================================================================================0
//----
//===================================================================================0
Picross.Control.prototype.CalculateRow = function (input) {
    'use strict';
    
    var countArray, groupedArray, i, colourID;
    
    countArray = [];
    groupedArray = [];
    
    for (i = 0; i < game.JSON.puzzle.COLOURS.length; i += 1) {
        countArray.push(0);
        groupedArray.push(true);
    }
    
    for (i = 0; i < input.length; i += 1) {
        colourID = input.charAt(i);
        countArray[colourID] += 1;
    }
    
    console.log(countArray);
};

