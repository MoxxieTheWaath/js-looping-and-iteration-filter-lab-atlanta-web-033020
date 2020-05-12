// Code your solution in this file
function findMatching(drivers, string) {

    return drivers.filter( function (name) { 
        return name.toLowerCase() == string.toLowerCase()
    })
}

function fuzzyMatch(drivers, string) {
    return drivers.filter( function (driver) {
        if (driver[0] == string[0]) {
            return driver
        }
    })
}

function matchName(drivers, string) {
    return drivers.filter( function (driver) {
        return driver.name == string
    })
}