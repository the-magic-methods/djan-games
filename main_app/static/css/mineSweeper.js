const tiles = document.querySelectorAll('.box')
let isBombsGenerated = false
let bombBoard = []
let canClick = true
let numBombs = 40
for (let i = 0; i < 216; i++) {
    bombBoard.push(false)
}
tiles.forEach(function (tile) {
    tile.addEventListener('click', translater)
})
tiles.forEach(function (tile) {
    tile.addEventListener('contextmenu', function (tile) {
        console.log("clicked")
        tile.target.className = tile.target.className + " flag"
        console.log(tile.target.className)
    })
})

function translater(tile) {
    if (canClick) {
        clickTile(tile.target)
        if (!isBombsGenerated) {
            generateBombs()
        }

        if (checkForSuroundingBombs(tile.target)[0] == 0) {
            blankTile(checkForSuroundingBombs(tile.target)[1], checkForSuroundingBombs(tile.target)[2])
        }
    }
    isGameOver()
}

function winLose(win) {
    if (win) {
        document.getElementById("win").innerHTML = "Congrats!!! You Win"
    } else {
        document.getElementById("win").innerHTML = "Dang...you just like...blew up and stuff"
    }
    canClick = false
}

function isGameOver() {
    let gameOver = 0
    const tiles = document.querySelectorAll(".opened");
    tiles.forEach(function (tile) {
        gameOver = +gameOver + +1

    })
    if (gameOver == 216 - numBombs) {
        winLose(true)
    }
}

function clickTile(tile) {

    if (tile.classList.contains("bomb") && !tile.classList.contains("flag")) {
        const bombs = document.querySelectorAll(".bomb");
        bombs.forEach(function (bomb) {
            bomb.style.backgroundColor = "red"
        })
        winLose(false)
    } else if (tile.classList.contains("flag")) {
        console.log("worked")
    } else {
        if (!tile.classList.contains("opened")) {
            tile.className = tile.className + " opened"
        }
        checkForSuroundingBombs(tile)
    }
}


function checkForSuroundingBombs(tile) {
    let numBombs = [[]]
    let row = tile.classList[2]
    row = row.substring(3);
    let col = tile.classList[1]
    col = col.substring(3);
    for (let y = -1; y < 2; y++) {
        for (let x = -1; x < 2; x++) {
            const rowNum = +row + +y
            const colNum = +col + +x
            if (colNum != 0 && colNum != 19 && rowNum != 0 && rowNum != 13) {
                const rowClass = "row" + rowNum
                const colClass = "col" + colNum
                let checkedTile = document.getElementsByClassName(rowClass + " " + colClass)
                if (checkedTile[0].classList.contains("bomb")) {
                    numBombs[0] = +numBombs[0] + +1
                }
            }
        }
    }
    if (numBombs[0] != 0 && !tile.classList.contains("bomb") && !tile.classList.contains("flag")) {
        tile.textContent = numBombs
    }
    if (numBombs[0] == 0) {
        numBombs.push(row)
        numBombs.push(col)
    }
    return numBombs
}
function blankTile(row, col) {
    for (let y = -1; y < 2; y++) {
        for (let x = -1; x < 2; x++) {
            const rowNum = +row + +y
            const colNum = +col + +x
            if (colNum != 0 && colNum != 19 && rowNum != 0 && rowNum != 13) {
                const rowClass = "row" + rowNum
                const colClass = "col" + colNum
                let checkedTile = document.getElementsByClassName(rowClass + " " + colClass)
                if (!tile.classList.contains("opened")) {
                    checkedTile[0].className = checkedTile[0].className + " opened"
                }

                if (checkForSuroundingBombs(checkedTile[0])[0] == 0 && !checkedTile[0].classList.contains("opened")) {

                    blankTile(rowNum, colNum)
                }
            }
        }
    }
}

function generateBombs() {
    for (let i = 0; i < numBombs; i++) {
        const rand = Math.floor(Math.random() * 216)
        const row = "row" + Math.floor((rand / 18) + 1)
        const col = "col" + ((rand % 18) + 1)
        let tile = document.getElementsByClassName(row + " " + col)
        if (tile[0].className == "box " + col + " " + row + " bomb" || tile[0].className == "box " + col + " " + row + " opened") {
            i = i - 1
        } else {
            tile[0].className = tile[0].className + " bomb"
            bombBoard[rand] = true
        }
    }
    isBombsGenerated = true
}