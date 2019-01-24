function configSomething(op) {
    op.maxSize = op.maxSize || 1024;
    console.log("Directory: %s", op.directory);
    console.log("File     : %s", op.file);
    console.log("Max Size : %s", op.maxSize);
}
configSomething({
    directory: "/dir1",
    file: "persons.json"
    //path: "persons.json"
});
//# sourceMappingURL=playObject.js.map