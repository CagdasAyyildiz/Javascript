obj1 = {
    name: 'Cagdas',
    getName: function() {
        console.log(this.name)
    }
}

obj2 = {
    name: 'Cagdas',
    getName: function() {
        console.log(name)
    }
}

name = 'something else'

//Prints 'Cagdas'
obj1.getName();

//Prints'something else'
obj2.getName();

obj1Name = obj1.getName;
obj2Name = obj2.getName;

//Both prints 'something else'
obj1Name();
obj2Name();

obj2.getName = obj2.getName.bind(obj2);
obj1.getName = obj1.getName.bind(obj1);

obj1Name = obj1.getName;
obj2Name = obj2.getName;

//obj1Name prints 'Cagdas' unlike before
//obj2Name still prints something else
obj1Name();
obj2Name();