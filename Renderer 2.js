class Renderer {
   
    renderBoard(board) {
        $("#board").empty()
        const source = $('#matrix-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template( board );
        $('#board').append(newHTML);
    }

    renderStartGame() {
        $("#board").empty()
        $("#board").append(`
            <tr class="welcome">
                <td></td>
                <td class="inst">To begin, Enter board size and press start</td>
                <td></td>
            </tr>
        `)
    }

    renderPlayerOneScore(score) {
        $("#onePoints").empty()
        const source = $('#score-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template( {score}  );
        $('#onePoints').append(newHTML);
    }

    renderPlayerTwoScore(score) {
        $("#twoPoints").empty()
        const source = $('#score-template').html();
        const template = Handlebars.compile(source);
        const newHTML = template(  {score}  );
        $('#twoPoints').append(newHTML);
    }

    renderPlayerScore(board) {
        this.renderPlayerOneScore(board.player1.score)
        this.renderPlayerTwoScore(board.player2.score)
    }

}