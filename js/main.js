/*var result;
function sum(a,b){
	return a + b
}
function sub(a,b){
	return a - b
}


function calculator(a,b, action){
	result = action(a,b);
	return result;
}



console.log(calculator(2,3,sum));
console.log(calculator(2,3,sub));
console.log(calculator(3,6,function(a,b){
	return a/b;
}))*/


//arguments

/*function args(){
	return arguments[0] + arguments[1]
}
console.log(args(1,2))

function foo(){
	if (arguments.length !== 3){
		console.error('You must specified 3 arguments!')
		return;
	}
	console.log(arguments[0]+ arguments[1] + arguments[2])
}

foo();
foo(1,2);
foo(1,2,4);
foo(12,3,2,1);
*/





//recursion

/*
var colors = ['red', 'green', 'blue'];
function f(counter){

	counter --;


	// document.write(counter+ '<br>');
	document.write('<div style="width: 100px; height: 100px; background-color:'+colors[counter]+'"></div>')

	if(counter != 0){
		f(counter);
	}
	document.write('<div style="width: 100px; height: 100px; background-color:'+ colors[counter]+'"></div>')
	// document.write(counter+ '<br>');
}
f(3);*/

//recursion example
//factorial

/*var input = +prompt('Insert number')

input = parseInt(input);

function factorial(x){

	if(x <=1){
		return 1
	}
	return x * factorial(x-1)

}
document.write('factorial' + input + '! = ' + factorial(input))
*/



/*
var obj = {
	key1: 'value1',
	key2: 'value2'
}
var obj2 = new Object(); // obj = {}

obj2.key1 = 'value1';

console.log(obj);
console.log(obj2);
*/

function Person(icon, name, sname, age){
	this.icon = icon;
	this.name = name;
	this.sname = sname;
	this.age = age;
	this.gender = 'male';
	this.sayHello = function(user){
		alert('Hello ' + user + '! My name is ' + this.name + ' ' + this.sname)
	}
}

var Jack = new Person('<img src="" alt="JackAvatar" />','Jack', 'Black', 13);// Jack = {name: 'Jack', sname: 'Black', age: 13}
console.log(Jack);
// Jack.sayHello('User');
var James = new Person('<img src="" alt="JamesAvatar" />','James', 'Bond', 007);
console.log(James);
// James.sayHello('User2');




function render(obj){
	document.write('<table align="center" width="100%" height="100px" border="1" cellspacing="0"><tbody><tr>')
	for(var key in obj){
		if(key == 'sayHello'){
			continue;
		}else if(key == 'icon'){
			document.write('<td>'+ obj[key] + '</td>');
		}else{
			document.write('<td>'+ key +'</td><td>'+ obj[key] + '</td>');
		}	
	}
	document.write('</tr></tbody></table>')
}

render(Jack);