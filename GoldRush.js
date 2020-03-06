// const Matrix = module.require('./Matrix')

class GoldRush extends Matrix {
    constructor() {
        super()
        this.player1 = { id: 1, x: Number, y: Number, score: Number}
        this.player2 = { id: 2, x: Number, y: Number, score: Number}
        this.numOfRows = 0
        this.numOfCols = 0
        this.coinCount = 0
    }
    
    loadBord(rowNum, colNum) {
        this.matrix = this.generateMatrix(rowNum, colNum)
        this.numOfRows = rowNum
        this.numOfCols = colNum
        for(let i = 0; i < rowNum; i++) {
            for(let j = 0; j < colNum; j++) {
                if(i === 0 && j === 0) {
                    this.matrix[i][j] = `1`
                    this.player1.score = 0
                    this.player1.x = i
                    this.player1.y = j
                } else if(i === (rowNum - 1) && j === (colNum - 1)) {
                    this.matrix[i][j] = `2`
                    this.player2.score = 0
                    this.player2.x = i
                    this.player2.y = j
                } else {
                    this.matrix[i][j] = this.coinORblank(Math.floor(Math.random() * 10))
                }
            }
        }
        return this.matrix
    }

    movePlayer(player, move) {
        let currPlayer
        if(player == 1) {
            currPlayer = this.player1
        } else {
            currPlayer = this.player2
        }
        let nextVal
        switch(move) {
            case 'down':
                if(currPlayer.y == this.numOfRows - 1) {break}
                nextVal = this.checkContent(currPlayer.y + 1, currPlayer.x)
                if(nextVal !== 2){
                    this.alter(currPlayer.y + 1, currPlayer.x, currPlayer.id)
                    this.alter(currPlayer.y, currPlayer.x , '.')
                    currPlayer.y++
                    if(nextVal == 1) {
                        currPlayer.score++ 
                    }
                }
                break
            
            case 'up':
                if(currPlayer.y == 0) {break}
                nextVal = this.checkContent(currPlayer.y - 1, currPlayer.x)
                if(nextVal !== 2){    
                    this.alter(currPlayer.y - 1, currPlayer.x, currPlayer.id)
                    this.alter(currPlayer.y, currPlayer.x , '.')
                    currPlayer.y--
                    if(nextVal == 1) {
                        currPlayer.score++ 
                    }
                }
                break

            case 'left':
                if(currPlayer.x == 0) {break}
                nextVal = this.checkContent(currPlayer.y, currPlayer.x - 1)
                if(nextVal !== 2){
                    this.alter(currPlayer.y, currPlayer.x - 1, currPlayer.id)
                    this.alter(currPlayer.y, currPlayer.x , '.')
                    currPlayer.x--
                    if(nextVal == 1) {
                        currPlayer.score++ 
                    }
                }
                break
            
            case 'right':
                if(currPlayer.x == this.numOfCols - 1) {break}
                nextVal = this.checkContent(currPlayer.y, currPlayer.x + 1)
                if(nextVal !== 2){
                    this.alter(currPlayer.y, currPlayer.x + 1, currPlayer.id)
                    this.alter(currPlayer.y, currPlayer.x , '.')
                    currPlayer.x++
                    if(nextVal == 1) {
                        currPlayer.score++ 
                    }
                }
                break
        }

    }

    coinORblank(num) {
        if(num%3 === 1) {this.coinCount++}
        return num%3 === 0 ?
            '.' :
            num%3 === 1 ?
            'c' :
            'x'
    }

    checkContent(yLoc, xLoc) {
        if(this.matrix[yLoc][xLoc] == 'c') {this.coinCount--}
        return this.matrix[yLoc][xLoc] == '.' ?
        0 :
        this.matrix[yLoc][xLoc] == 'c' ?
        1:
        2

    }

}