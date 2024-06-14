window.addEventListener('DOMcontentnLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const playerDispaly = document.querySelector('.display-player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer')

    let board = ('','','','','','','','','');
    let currentPlayer = 'x';
    let isGameActive = true;

    resetButton.addEventListener('click', resetBoard);

});