import _ from "lodash";

export default function array() {
  const difference1 = _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
    //console.log(difference1);

    const difference2 = _.differenceBy([{ 'x': 2 }, { 'x': 1 }], [{ 'x': 1 }], 'x');
    //console.log(difference2);

  const objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }];

  const differencWeith1 = _.differenceWith(objects, [{ 'x': 1, 'y': 2 }]);
  //console.log(differencWeith1);

  const users = [
    { 'user': 'barney',  'active': true },
    { 'user': 'fred',    'active': false },
    { 'user': 'pebbles', 'active': false }
  ];

  const dropRightWhile1 = _.dropRightWhile(users, { 'user': 'pebbles', 'active': false });
  //console.log(dropRightWhile1);

  const fill1 = _.fill([4, 6, 8, 10], '*' ,3, 5);
  //console.log(fill1);

  const indexOf1 = _.indexOf([1, 2, 1, 2], 2, 1);
  //console.log(indexOf1);

  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const sliceArray = _.slice(array, 3,7);
  //console.log(sliceArray);


  const userss = [{ 'user': 'fred', 'age': 48 }, { 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 49 },  { 'user': 'aaa', 'age': 50 }];

// 나이에 따라 정렬된 상태에서 새 객체가 삽입될 마지막 위치를 찾습니다.
  const sortedLastIndexBy1 = _.sortedLastIndexBy(userss, { 'user': 'fred', 'age': 40 }, function(o) { return o.age; });
  //console.log(sortedLastIndexBy1);


  const sortedArray = [2, 3, 1, 2, 4];

  const sortedIndex = _.sortedIndexOf(sortedArray, 2);
  //console.log(sortedIndex); // 3

  const indexOf = _.indexOf(sortedArray, 2);
  //console.log(indexOf); // 0

  const zipped = _.zip([1, 2, 1], [10, 20, 10], [100, 200, 100]);
  //console.log(zipped);

  //console.log(_.unzipWith(zipped));

  const without1 = _.without([2, 1, 2, 3], 1, 2);


}
