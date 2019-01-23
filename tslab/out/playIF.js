function configSomething(op) {
    op.maxSize = op.maxSize || 1024;
    console.log("Directory: %s", op.directory);
    console.log("File: %s", op.file);
    console.log("Max Size: %d", op.maxSize);
}
configSomething({
    directory: "/dir1",
    //path: "persons.json"
    file: "persons.json"
});
//# sourceMappingURL=playIF.js.map