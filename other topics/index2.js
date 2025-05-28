const promise1 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("1")
        resolve("promise1 resoled")
    }, 1000)
})

const promise2 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("2")
        resolve("promise2 resoled")
    }, 2000)
})


const promise3 = () => new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("3")
        resolve("promise3 resoled")
    }, 3000)
})


const arr = [promise1, promise2, promise3]

async function executePromise() {
    for (let i of arr) {
        await i()
    }
}
executePromise()