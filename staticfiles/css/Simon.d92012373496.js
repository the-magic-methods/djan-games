//defined elements
const green = document.querySelector('#grn')
const red = document.querySelector('#red')
const blue = document.querySelector('#blu')
const yellow = document.querySelector('#ylw')
const start = document.querySelector('#start')
const win = document.querySelector('#win')
const loss = document.querySelector('#loss')
const levelCounter = document.querySelector('#LC')
const choices = ['#grn', '#red', '#blu', '#ylw']
let pattern = []
let playerPress = []
let answer = []
let startResult
let n = -1
let level = 1
green.disabled = true
red.disabled = true
blue.disabled = true
yellow.disabled = true

//functions
const onGreenClicked = function (event) {
    let timeout
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            timeout = setTimeout(function() {
                resolve(green.classList.remove('green-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }
      
      async function asyncCall() {
        green.classList.add('green-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()

    playerPress.push(greenGlow)
    n++


    function checkAnswer() {
        let result
        if (playerPress[n] == pattern[n] && playerPress.length < pattern.length) {
            clearTimeout(timeout)
            setTimeout(function() {
                green.classList.remove('green-space-pressed')
            }, 1000)
        } else if (playerPress[n] == pattern[n] && playerPress.length == pattern.length) {
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                green.classList.remove('green-space-pressed')
            }, 1000)
            start.disabled = false
            playerPress.length = 0
            n = -1
            level++
            levelCounter.innerText = 'Level: '
            levelCounter.insertAdjacentText('beforeend', level)
            
        } else {
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                green.classList.remove('green-space-pressed')
            }, 1000)
            loss.classList.add('loss')

        }
        return result
    }
    checkAnswer()
}

const greenGlow = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
          setTimeout(function() {
            resolve(green.classList.remove('green-space-pressed'))
            green.disabled = false
            red.disabled = false
            blue.disabled = false
            yellow.disabled = false
          }, 1000)
        })
    }
      
      async function asyncCall() {
        green.classList.add('green-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()
}

const onRedClicked = function (event) {
    let timeout
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            timeout = setTimeout(function() {
                resolve(red.classList.remove('red-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }

    async function asyncCall() {
        red.classList.add('red-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()

    playerPress.push(redGlow)
    n++

    function checkAnswer() {
        let result
        if (playerPress[n] == pattern[n] && playerPress.length < pattern.length) {
            clearTimeout(timeout)
            setTimeout(function() {
                red.classList.remove('red-space-pressed')
            }, 1000)
        } else if (playerPress[n] == pattern[n] && playerPress.length == pattern.length) {
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                red.classList.remove('red-space-pressed')
            }, 1000)
            start.disabled = false
            playerPress.length = 0
            n = -1
            level++
            levelCounter.innerText = 'Level: '
            levelCounter.insertAdjacentText('beforeend', level)
            
        } else {
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                red.classList.remove('red-space-pressed')
            }, 1000)
            loss.classList.add('loss')
        }
        return result
    }
    checkAnswer()
}

const redGlow = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            setTimeout(function() {
                resolve(red.classList.remove('red-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }

    async function asyncCall() {
        red.classList.add('red-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()
}

const onBlueClicked = function (event) {
    let timeout
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            timeout = setTimeout(function() {
                resolve(blue.classList.remove('blue-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }

    async function asyncCall() {
        blue.classList.add('blue-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()

    playerPress.push(blueGlow)
    n++

    function checkAnswer() {
        let result
        if (playerPress[n] == pattern[n] && playerPress.length < pattern.length) {
            clearTimeout(timeout)
            setTimeout(function() {
                blue.classList.remove('blue-space-pressed')
            }, 1000)
        } else if (playerPress[n] == pattern[n] && playerPress.length == pattern.length) {
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                blue.classList.remove('blue-space-pressed')
            }, 1000)
            start.disabled = false
            playerPress.length = 0
            n = -1
            level++
            levelCounter.innerText = 'Level: '
            levelCounter.insertAdjacentText('beforeend', level)
            
        } else {
            green.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                blue.classList.remove('blue-space-pressed')
            }, 1000)
            loss.classList.add('loss')
        }
        return result
    }
    checkAnswer()
}

const blueGlow = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            setTimeout(function() {
                resolve(blue.classList.remove('blue-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }

    async function asyncCall() {
        blue.classList.add('blue-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()
}

const onYellowClicked = function (event) {
    let timeout
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            timeout = setTimeout(function() {
                resolve(yellow.classList.remove('yellow-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }

    async function asyncCall() {
        yellow.classList.add('yellow-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()

    playerPress.push(yellowGlow)
    n++

    function checkAnswer() {
        let result
        if (playerPress[n] == pattern[n] && playerPress.length < pattern.length) {
            clearTimeout(timeout)
            setTimeout(function() {
                yellow.classList.remove('yellow-space-pressed')
            }, 1000)
        } else if (playerPress[n] == pattern[n] && playerPress.length == pattern.length) {
            yellow.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                yellow.classList.remove('yellow-space-pressed')
            }, 1000)
            start.disabled = false
            playerPress.length = 0
            n = -1
            level++
            levelCounter.innerText = 'Level: '
            levelCounter.insertAdjacentText('beforeend', level)
            
        } else {
            yellow.disabled = true
            red.disabled = true
            blue.disabled = true
            yellow.disabled = true
            clearTimeout(timeout)
            setTimeout(function() {
                yellow.classList.remove('yellow-space-pressed')
            }, 1000)
            loss.classList.add('loss')
        }
        return result
    }
    checkAnswer()
}

const yellowGlow = function (event) {
    function resolveAfter1Second() {
        return new Promise(function (resolve) {
            setTimeout(function() {
                resolve(yellow.classList.remove('yellow-space-pressed'))
                green.disabled = false
                red.disabled = false
                blue.disabled = false
                yellow.disabled = false
            }, 1000)
        })
    }

    async function asyncCall() {
        yellow.classList.add('yellow-space-pressed')
        const result = await resolveAfter1Second()
    }
    asyncCall()
}

//start button
const onStartClicked = function (event) {
    const pressFunctions = [greenGlow, redGlow, blueGlow, yellowGlow]
    let randomIndex = Math.floor(Math.random() * choices.length)
    let startResult = choices[randomIndex]
    pressResult = pressFunctions[randomIndex]
    pattern.push(pressResult)
    answer.push(startResult)
    function runStart() {
        for (let i = 0; i < pattern.length; i++) {
        setTimeout(function() {
        pressResult = pattern[i]
        pressResult()
            }, 1200*i)
        }
    }
    runStart()
    start.disabled = true
}

//add event listener
document.addEventListener('DOMContentLoaded', function() {
    green.addEventListener('click', onGreenClicked)
    red.addEventListener('click', onRedClicked)
    blue.addEventListener('click', onBlueClicked)    
    yellow.addEventListener('click', onYellowClicked)
    start.addEventListener('click', onStartClicked)
})

//level presenter
levelCounter.insertAdjacentText('beforeend', level)