const log = console.log

window.addEventListener('load', () => {
    //내장객체

    //새로운 빈 객체 생성 방법
    var o = {};
    var o1 = new Object();

    //포함되어 있는 속성
    log(o.constructor());
    log(o.toString()); //문자열 컨텍스트에서 사용될 때 
    log(o.valueOf()); //객체 자체 반환

    // alert(o);
    //alert(o.toString());

    log("An Object: " + o);

    //Array()

    var a = new Array();
    var a1 = [];

    a = new Array(1, 2, 3, 'four'); //배열전달
    log(a);

    a = new Array(5) //배열의 길이 간주
    log(a);

    log(typeof a); // 배열은 객체임

    log(a.toString());
    log(a.constructor);
    log(a.valueOf());

    a = [], o = {};

    log(a.length, o.length); //배열은 length속성 자동 정의
    
    a[0] = 1;
    o[0] = 1;
    a.prop = 2;
    o.prop = 2;

    log(a.length); //숫자가 아닌속성 무시
    log(o);

    a.length = 5;
    log(a); 
    a.length = 1;
    log(a);

    a = [3, 5, 1, 7, 'test'];
    //push() 배열의 끝에 새로운 요소 추가
    //pop() 배열의 마지막 요소제거

    a.push('new');
    log(a);
    a.pop();
    log(a);

    var b = a.sort();
    log(b);
    log(a === b);

    log(a.join(', '));

    log(a.slice(1, 3)); // 1 <= i < 3

    log(b = a.splice(1, 2, 100, 101, 102)); //자를 위치부터, 자를 길이, 채울 값
    log(a);

    //Array.from
    function toArray(args) {
        var result = [];
        for(let i = 0, len = args.length; i < len; i++) {
            result.push(args[i]);
        }

        return result;
    }

    function doSomething() {
        var args = toArray(arguments);
        console.log(args);
    }
    doSomething("hellow", "workd");

    function doSomething2() {
        log(Array.from(arguments));
    }

    doSomething2("hellow", "world");

    //Array.of(); 인자에 상관없이 배열생성

    let arr = ['a', 'b', 'c'];
    for(const index of arr.keys()) {
        console.log(index);
    }

    log(arr.keys().next());

    for(const value of arr.values()) {
        log(value);
    }

    log(arr.values().next());

    for(const [index, value] of arr.entries()) {
        log(index, value);
    }
    log(arr.entries().next());

    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    log(numbers.find(n => n > 5)); //한개 리턴함
    log(numbers.findIndex(n => n > 5, this)); //index 리턴

    //함수선언
    function sum(a, b) {
        return a + b;
    }

    log(sum(1, 2));

    //함수 표현식
    var sum = function(a ,b) {
        return a + b;
    };

    log(sum(1, 2));

    //생성자 이용
    var sum = new Function('a', 'b', 'return a + b'); //eval() 함수과 똑같은 단점을 가진다.
    log(sum(1, 2));

    var ninja = {
        name: 'Ninja',
        say: function() {
            return 'I am a ' + this.name;
        }
    };

    function F() {};

    log(typeof F.prototype);
    F.prototype = ninja;

    var baby_ninja = new F();
    log(baby_ninja);

    function myFun(a, b, c) {
        return a + b + c;
    }
    log(myFun.toString());

    var some_obj = {
        name: 'Ninja',
        say: function(who) {
            return 'Haya ' + who + ', I am a ' + this.name;
        }
    }

    log(some_obj.say('박현준'));

    //call과 apply
    var my_obj = {
        name: 'Scripting guru'
    };

    log(some_obj.say.call(my_obj, '박현준')); //call의 첫번째 매개변수가 없거나 null인경우 this는 전역개체로 지정함
    log(some_obj.say.apply(my_obj, ['박현준']));
});