# 제대로 해보는 JavaScript & Lodash

## 1. Lodash

### 1.1. Lodash란?

Lodash 란 JavaScript의 표준 라이브러리라고 불릴정도로 많이 사용되는 라이브러리 입니다. 
JavaScript 의 경우 자유도가 너무 높은 언어이기에, 코드의 표준과 코드의 양을 줄여주고, 빠른 작업에 도움이 됩니다. 
보통의 경우 array, collection, date 등 데이터의 필수적인 구조를 쉽게 다룰 수 있게끔 하는데에 사용됩니다. 

_.(변수) ex) _.map, _.filter, _.find, _.reduce 등등

브라우저에서 지원하지 않는 성능이 보장되어있는 다양한 메소드를 가지고 있음.
퍼포먼스 측면에서 native보다 더 나은 성능을 가짐.
npm이나 기타 패키지 매니저를 통해 쉽게 사용 가능.

### 1.2. 왜 사용하나?

지금까지 바닐라 자바스크립트와 로대쉬의 성능 차이를 보면, 대부분의 같은 기능을 하는 함수 native ES6 문법이 lodash 라이브러리 문법보다 성능이 빠르다는걸 알 수 있다.

그럼 의문이 들것이다.
당연히 native문법이 라이브러리 문법보다 빠르고, 기본 지원하는데 왜 굳이 무거운 lodash라이브러리를 써야 하나?

정답은 바로 함수의 확장성 때문이다.

```javascript
const myFriend = [
 {name:'kys',job:'developer',age:27},
 {name:'cys',job:'webtoons man',age:27},
 {name:'yhs',job:'florist',age:26},
 {name:'chj',job:'nonghyup man',age:27},
];

myFriend.findIndex(function(friend){
   return friend.age === 26 // 2
});

_.findIndex(myFriend, function(friend) {
  return friend.age === 26; // 2
});

```
결과를 보면 같은 기능을 하는 것을 알 수 있다.
 
하지만, ES6의 findIndex()는 파라미터로 콜백함수밖에 못오지만, Lodash의 findIndex()는 객체값도 줄수 있다는 차이점이 있다.

```javascript
// 처음 일치하는 object의 index 값을 반환합니다.
_.findIndex(myFriend, { name: 'cys', job:'webtoons man',age: 27 });
// -> 1

// 나이가 26인 객체가 처음으로 나오는 index 반환
_.findIndex(myFriend, {age: 26});
// → 2
```
map() 함수도 마찬가지이다. ES6에서는 흔히 배열 고차함수라고 가르치지만, lodash의 map()함수는 배열뿐만 아니라 객체 자체를 줄수 있다.

```javascript
const data = {
  a: 20,
  b: 30,
  c: 10,
}

// 원래라면 map메소드는 배열에서 못쓰지만, _.map은 객체 자페를 map할 수 있음
// 객체를 받아 업그레이드된 객체를 리턴
_.map(data, (count, type) => ({
  type: type,
  count: count,
}))
/* 결과값
[
  {
    type: 'a',
    count: 20
  },
  {
    type: 'b',
    count: 30
  },
  {
    type: 'c',
    count: 10
  }
]
*/
```

또한, 배열의 요소들중 중복값을 제거한 값을 구할때도 lodash를 이용하면 간편하게 함수를 이용해서 구현할수 있으며, 벤치마크 점수를 보면 알수있듯이 오히려 성능이 순수 자바스크립트로 구현하는 것 보다 좋다.

```javascript

var elements = [1,2,3,1,2,4,2,3,5,3]

/* Lodash */
// 지원 함수를 한방에!!
_.uniq(elements) //  [1,2,3,4,5]

/* ES6 */
// Set자료 구조를 이용하여 중복을 제거한 뒤 sperad 연산자를 사용하여 다시 배열로 돌려 놓는 복잡한 로직을 사용한다.
[...new Set(elements)] //  [1,2,3,4,5]

```


오늘부터 열심히 공부해 보도록 하겠다. 


## 막혔던 부분 

#### 1. _.difference , _.differenceBy , _.differenceWith
_.difference 는 첫번째 배열과 두번째 배열에서 다른 요소를 반환한다. (유일한?)

_.differenceBy 는 비교할때,3번째 인자로 받은 함수대로 배열들을 변환한뒤에 비교하여, 다른 요소를 반환한다.

_.differenceWith 는 첫번째 배열과 두번째 배열을 비교할때 3번째 인자의 함수로 받은 방법대로 이 둘을 비교한다. 

즉 _.differenceBy, _.differenceWith 는 각각 3번째 인자 함수로 변환하여 비교하거나, 3번째 인자 대로 비교하는 것이다. 



