const renderer = new Renderer()
const board = new GoldRush()

board.loadBord(2, 2)
// console.log(board);

// renderer.renderBoard(board)
renderer.renderPlayerScore(board)
renderer.renderStartGame()

$("#container").on("click", "#start", function() {
    const numRows = $("#rows").val()
    const numColums = $("#colums").val()
    $("#rows").val("")
    $("#colums").val("")
    board.loadBord(numRows, numColums)
    renderer.renderBoard(board)
})

$(document).keypress(function (e) {

    switch(e.which){
        case 119:
            board.movePlayer(1, "up")
            renderer.renderBoard(board)
            renderer.renderPlayerScore(board)
            break
        
        case 115:
            board.movePlayer(1, "down")
            renderer.renderBoard(board)
            renderer.renderPlayerScore(board)
            break

        case 97:
            board.movePlayer(1, "left")
            renderer.renderBoard(board)
            renderer.renderPlayerScore(board)
            break  
            
        case 100:
            board.movePlayer(1, "right")
            renderer.renderBoard(board)
            renderer.renderPlayerScore(board)
            break

        case 105:
            board.movePlayer(2, "up")
            renderer.renderBoard(board)
            renderer.renderPlayerScore(board)
            break
        
        case 107:
            board.movePlayer(2, "down")
            renderer.renderBoard(board)
            renderer.renderPlayerScore(board)
            break

        case 106:
            board.movePlayer(2, "left")
            renderer.renderBoard(board)
            renderer.renderPlayerScore(board)
            break  
            
        case 108:
            board.movePlayer(2, "right")
            renderer.renderBoard(board)
            renderer.renderPlayerScore(board)
            break
    }
})

