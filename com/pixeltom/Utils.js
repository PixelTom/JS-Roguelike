/**
* @author       Thomas Gattenhof <tom@pixeltom.net>
* @copyright    2015 Thomas Gattenhof
*/

/**
* JS Utilities Class
*
*
*/

/*globals PixelTom, console*/

PixelTom.Utils = function (game) {
    'use strict';
    
    this.game = game;
};

PixelTom.Utils.prototype.constructor = PixelTom.Utils;

//===================================================================================0
// @method randomHex
// @return string
//
// Returns a Hex Colour string value generated randomly
//===================================================================================0
PixelTom.Utils.prototype.randomHex = function () {
    'use strict';
    
    var returnString = '0x';
    var colourArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];
    
    while (returnString.length < 8) {
        returnString += this.rnFromArray(colourArray);
    }
    
    return returnString;
};

//===================================================================================0
// @method  rnFromArray
// @param   array
// @return  *
//
// Chooses a random element in an array and returns it
//===================================================================================0
PixelTom.Utils.prototype.rnFromArray = function (array) {
    'use strict';
    
    return array[this.rn(0, array.length - 1)];
};

//===================================================================================0
// @method  rn
// @param   start
// @param   end
// @return  integer
//
// Returns a random number between start and end, inclusive
//===================================================================================0
PixelTom.Utils.prototype.rn = function (start, end) {
    
    'use strict';
    return Math.round(Math.random() * (end - start)) + start;
};


//===================================================================================0
// Colour Constants for reference
//===================================================================================0
PixelTom.Utils.prototype.COLOUR = 0x874567;
PixelTom.Utils.prototype.WHITE = 0xFFFFFF;
PixelTom.Utils.prototype.BLACK = 0x000000;
