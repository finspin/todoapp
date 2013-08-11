var tasklist = [
    "Wash windows",
    "Buy flowers and wine",
    "Do laundry",
    "Book trip to France"];

exports.index = function(req, res){
    res.render('index', { title: 'Todo App', tasklist: tasklist });
};

exports.addTask = function(req, res) {
    tasklist.push(req.body.task);
    res.redirect("/");
};

exports.deleteTask = function(req, res) {
    var index = tasklist.indexOf(req.params.task);
    tasklist.splice(index, 1);
    res.redirect("/");
};
