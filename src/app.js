App = {
    load: async () => {
        // Load app ...
        console.log("app loading ...")
    }
}

$(() => {
    $(window).load(() => {
        App.load()
    })
})