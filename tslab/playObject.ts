interface ConfigOption {
    directory: string
    file: string
    maxSize?: number        // ? means optional prop
}

// Force the object we receive to conform
// to the ConfiOption I/F
//
function configSomething(op: ConfigOption) {
    op.maxSize = op.maxSize || 1024

    console.log("Directory: %s", op.directory)
    console.log("File     : %s", op.file)
    console.log("Max Size : %s", op.maxSize)
}
// json object infered to be ConfigOption by compiler
// because using it as parameter to configSomething()
//
configSomething({
    file: "persons.json",
    directory: "/dir1",
    //maxSize: 22,
//    path: "persons.json"
})