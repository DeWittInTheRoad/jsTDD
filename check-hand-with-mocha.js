var wish = require('wish');

var deepEqual = require('deep-equal');

function checkHand(hand) {
    if (isPair(hand)) {
        return 'pair';
    } else if (isTriple(hand)) {
        return 'three of a kind';
    } else if (isQuadruple(hand)) {
        return 'four of a kind';
    } else if (isFlush(hand)) {
        return 'flush';
    } else {
        return 'high card'
    }
};

function isPair(hand) {
    return multiplesIn(hand) === 2;
};

function isTriple(hand) {
    return multiplesIn(hand) === 3;
};

function isQuadruple(hand) {
    return multiplesIn(hand) === 4;
};

function multiplesIn(hand) {
    return highestCount(valuesFromHand(hand));
};

function isFlush(hand) {
    return allTheSameSuit(suitsFor(hand));
};

function allTheSameSuit(suits) {
    suits.forEach(function (suit) {
        if (suit !== suits[0]) {
            return false;
        }
    })
    return true;
};

function suitsFor(hand){
    return hand.map(function(card){
        return card.split('-')[1];
    })
};


function highestCount(values) {
    let counts = {};

    values.forEach(function (value, index) {
        counts[value] = 0;

        if (value == values[0]) {
            counts[value]++;
        };
        if (value == values[1]) {
            counts[value]++;
        };
        if (value == values[2]) {
            counts[value]++;
        };
        if (value == values[3]) {
            counts[value]++;
        };
        if (value == values[4]) {
            counts[value]++;
        };
    });
    let totalCounts = Object.keys(counts).map(function (key) {
        return counts[key];
    });
    return totalCounts.sort(function (a, b) { return b - a })[0];

};

function valuesFromHand(hand) {
    return hand.map(function (card) {
        return card.split('-')[0];
    });
};

describe('valuesFromHand', function () {
    it('returns just the values from a hand', function () {
        let result = valuesFromHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(deepEqual(result, ['2', '3', '4', '5', '2']));
    });
});

describe('highestCount', function () {
    it("returns count of the most common card from array", function () {
        let result = highestCount(['2', '4', '4', '4', '2']);
        wish(result === 3);
    });
});

describe('multiplesIn', function () {
    it('finds a duplicate', function () {
        let result = multiplesIn(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(result === 2);
    });
});

describe('isPair()', function () {
    it('finds a pair', function () {
        let result = isPair(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(result);
    });
});

describe('allTheSameSuit()', function () {
    it('reports true if elements are all the same', function () {
        let result = allTheSameSuit(['D', 'D', 'D', 'D', 'D']);
        wish(result);
    });
});

describe('checkHand()', function () {
    it('handles pairs', function () {
        let result = checkHand(['2-H', '3-C', '4-D', '5-H', '2-C']);
        wish(result === 'pair');

        let anotherResult = checkHand(['3-H', '3-C', '4-D', '5-H', '2-C']);
        wish(anotherResult === 'pair');
    });

    it('handles three of a kind', function () {
        var result = checkHand(['3-H', '3-C', '3-D', '5-H', '2-H']);
        wish(result === 'three of a kind');
    });

    it('handles four of a kind', function () {
        let result = checkHand(['3-H', '3-C', '3-D', '3-H', '2-H']);
        wish(result === 'four of a kind');
    });

    it('handles a high card', function () {
        let result = checkHand(['2-H', '5-C', '9-D', '7-S', '3-H']);
        wish(result === 'high card');
    });

    it('handles a flush', function () {
        let result = checkHand(['2-H', '3-H', '4-H', '5-H', '9-H']);
        wish(result === 'flush');
    });
});
