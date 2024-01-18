import _ from "lodash";

export default function Collection() {
    function duplicate(n) {
        return [[[n, n]]];
    }

//console.log(_.flatMapDeep([1, 2], duplicate));

    const invokeMap1 = _.invokeMap([[5, 1, 7], [3, 2, 1], [1, 4, 2]], 'sort');

    console.log(invokeMap1);

// => [[1, 5, 7], [1, 2, 3]]

    _.invokeMap([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
}
