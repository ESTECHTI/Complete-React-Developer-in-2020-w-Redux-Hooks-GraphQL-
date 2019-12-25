const myPromise = new Promise((resolve, reject) => {
    if(false){
        setTimeout(() => {
            resolve('I have succeeded!')
        }, 1000)
    } else {
        reject('I have failed')
    }
})

myPromise
.then(value => value + '!!!!')
.catch(rejectValue => console.log(rejectValue));