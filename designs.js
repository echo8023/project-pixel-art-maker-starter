$(function () {
    $('#gridSubmit').click(function (event) {
        event.preventDefault();
        makeGrid();
    });

    function makeGrid() {
        const pixelCanvas = $('#pixelCanvas');
        const gridHeight = $('#inputHeight').val();
        const gridWidth = $('#inputWeight').val();
        pixelCanvas.empty();
        // creates the table grid
        for (let r = 0; r < gridHeight; r++) {
            let row = $('<tr class="canvasRow"></tr>').appendTo(pixelCanvas);
            for (let c = 0; c < gridWidth; c++) {
                $('<td class="canvasCol"></td>').appendTo(row);
            }
        }
    }

    $('#pixelCanvas').on('click', 'td', function (event) {
        $(this).css('background-color', $('#colorPicker').val());
    })
});
