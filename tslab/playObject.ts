interface ConfiOption {
    directory: string
    file: string
    maxSize?: number
}

function configSomething(op: ConfiOption) {
    op.maxSize = op.maxSize || 1024

    console.log("Directory: %s", op.directory)
    console.log("File     : %s", op.file)
    console.log("Max Size : %s", op.maxSize)
}

configSomething({
    directory: "/dir1",
    file: "persons.json"
    //path: "persons.json"
})