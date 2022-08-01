const { PermissionUser } = require("./dist")

const user = new PermissionUser("test", [
    "thing.one",
    "thing.two",
    "group.test",
    "one.two.three",
    "group.find.this",
    "also.*",
])

console.log(user.check("group.find.this"), user.check("group.find.that"))
