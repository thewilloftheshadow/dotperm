const { PermissionUser } = require("./dist")

const user = new PermissionUser("test", [
    "thing.one",
    "thing.two",
    "group.test",
    "one.two.three",
    "group.find.this",
    "also.*",
])

console.log(JSON.stringify(user, null, 2))

console.log(
    user.check("thing.three"),
    user.check("thing.one"),
    user.check("one.two"),
    user.check("also.test")
)
