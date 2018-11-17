var checkHand = function() {
    return 'pair';
};

var assert = require ('wish');
assert(checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']) === 'pair');
assert(checkHand(['3-H', '3-C', '3-D', '5-H', '2-H']) === 'three of a kind');

// var checkHand = function (hand) {
//     if (checkStraightFlush(hand)){
//         return "straight flush";
//     }
//     if (checkFourOfKind(hand)){
//         return "four of a kind";
//     }
//     if (checkFullHouse(hand)){
//         return "full house";
//     }
//     if (checkFlush(hand)){
//         return "flush";
//     }
//     if (checkStraight(hand)){
//         return "straight";
//     }
//     if (checkThreeOfKind(hand)){
//         return "three of a kind";
//     }
//     if (checkTwoPair(hand)){
//         return "two pair";
//     }
//     if (checkPair(hand)){
//         return "pair";
//     }
//     else {
//         return "high card";
//     }
// };

// console.log(checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']));