// the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
//  In other words, a closure gives you access to an outer function's scope from an inner function.

function parent (){
    let a=60;
    function child(){
        let b=10;
        console.log(a);
    }
    return child;
}
let newParent=parent();
newParent();