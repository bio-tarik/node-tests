module.exports.add = (a,b) => a + b;

module.exports.addAsync = (a, b, callback) => {
    setTimeout(() => {
        callback(a + b);
    }, 1000);
};

module.exports.square = (x) => x * x;

module.exports.squareAsync = (x, callback) => {
    setTimeout(() => {
        callback(x * x);
    }, 1000);
};

module.exports.setName = (user, fullname) => {
    let names = fullname.split(' ');
    
    user.firstName = names[0];
    user.lastName = names[1];
    
    return user;
};