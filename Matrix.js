class Matrix {
    constructor(numRows, numColumns) {
        this.matrix = this.generateMatrix(numRows, numColumns)
    }

    generateMatrix(numRows, numColumns) {
        let matrix = []
        let counter = 1
        for(let r = 0; r < numRows; r++) {
            let row = []
            for(let i = 0; i < numColumns; i++) {
                row.push(counter++)
            }
            matrix.push(row)
        }
        return matrix
    }

    get(numRows, numColumns) {
        return this.matrix[numRows][numColumns]
    }

    print() {
        for (let i = 0; i < this.matrix.length; i++) {
            let line = ""
            for (let j = 0; j < this.matrix[i].length; j++) {
                line += (this.matrix[i][j] + "\t")
            }
            console.log(line)
        }
    }

    printRow(rowNum) {
        for(let i = 0; i < this.matrix[rowNum].length; i++) {
            console.log(this.matrix[rowNum][i]);
        }
    }

    printColumn(columnNum) {
        for(let i = 0; i < this.matrix.length; i++) {
            console.log(this.matrix[i][columnNum]);
        }
    }

    alter(numRow, numColumn, num) {
        this.matrix[numRow][numColumn] = num
    }

    findCoordinate(val) {
        for(let i = 0; i < this.matrix.length; i++) {
            for(let j = 0; j < this.matrix[i].length; j++) {
                if(this.matrix[i][j] === val) {
                    return {x: j, y: i}
                }
            }
        }
    }    
}



// module.exports = Matrix