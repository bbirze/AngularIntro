interface ConfigOption {
    directory: string
    file: string
    maxSize?: number
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

configSomething({
    directory: "/dir1",
    file: "persons.json",
//    path: "persons.json"
})