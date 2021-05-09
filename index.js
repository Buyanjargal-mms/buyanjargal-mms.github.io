document.addEventListener('DOMContentLoaded', ()=>{
    const gridDisplay = document.querySelector('.grid')
    const scoreDisplay = document.getElementById('score')
    const resultDisplay = document.getElementById('result')
    const width = 4
    let squares = []

    /** togloomiin talbaigaa uusgej baina */
    function createBoard(){
        for(let i=0; i < width*width; i++){
            square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square)
        }
        generate()
        generate()
    }
    createBoard()

    /** sanamsargui nudnuuded anhnii utga uusgej baina */
    function generate(){
        let random = Math.floor(Math.random () * squares.length)
        if(squares[random].innerHTML == 0)
            squares[random].innerHTML = 2
        else 
            generate()
    }

    /** barunn shiljuuleh function */
    function moveRight() {
        for (let i=0; i < 16; i++) {
          if (i % 4 === 0) {
            let one = squares[i].innerHTML
            let two = squares[i+1].innerHTML
            let three = squares[i+2].innerHTML
            let four = squares[i+3].innerHTML
            let row = [parseInt(one), parseInt(two), parseInt(three), parseInt(four)]
    
            let filtered = row.filter(num => num)
            let missing = 4 - filtered.length
            let zeros = Array(missing).fill(0)
            let newRow = zeros.concat(filtered)
    
            squares[i].innerHTML = newRow[0]
            squares[i +1].innerHTML = newRow[1]
            squares[i +2].innerHTML = newRow[2]
            squares[i +3].innerHTML = newRow[3]
          }
        }
      }
    /** zuun shiljuuleh function */
      function moveLeft() {
        for (let i=0; i < 16; i++) {
          if (i % 4 === 0) {
            let totalOne = squares[i].innerHTML
            let totalTwo = squares[i+1].innerHTML
            let totalThree = squares[i+2].innerHTML
            let totalFour = squares[i+3].innerHTML
            let row = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
    
            let filteredRow = row.filter(num => num)
            let missing = 4 - filteredRow.length
            let zeros = Array(missing).fill(0)
            let newRow = filteredRow.concat(zeros)
    
            squares[i].innerHTML = newRow[0]
            squares[i +1].innerHTML = newRow[1]
            squares[i +2].innerHTML = newRow[2]
            squares[i +3].innerHTML = newRow[3]
          }
        }
      }
    /** deeshee shiljuuleh function */
      function moveUp() {
        for (let i=0; i < 4; i++) {
          let totalOne = squares[i].innerHTML
          let totalTwo = squares[i+width].innerHTML
          let totalThree = squares[i+(width*2)].innerHTML
          let totalFour = squares[i+(width*3)].innerHTML
          let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
    
          let filteredColumn = column.filter(num => num)
          let missing = 4 - filteredColumn.length
          let zeros = Array(missing).fill(0)
          let newColumn = filteredColumn.concat(zeros)
    
          squares[i].innerHTML = newColumn[0]
          squares[i +width].innerHTML = newColumn[1]
          squares[i+(width*2)].innerHTML = newColumn[2]
          squares[i+(width*3)].innerHTML = newColumn[3]
        }
      }
    /** dooshoo shiljuuleh function */
      function moveDown() {
        for (let i=0; i < 4; i++) {
          let totalOne = squares[i].innerHTML
          let totalTwo = squares[i+width].innerHTML
          let totalThree = squares[i+(width*2)].innerHTML
          let totalFour = squares[i+(width*3)].innerHTML
          let column = [parseInt(totalOne), parseInt(totalTwo), parseInt(totalThree), parseInt(totalFour)]
    
          let filteredColumn = column.filter(num => num)
          let missing = 4 - filteredColumn.length
          let zeros = Array(missing).fill(0)
          let newColumn = zeros.concat(filteredColumn)
    
          squares[i].innerHTML = newColumn[0]
          squares[i +width].innerHTML = newColumn[1]
          squares[i+(width*2)].innerHTML = newColumn[2]
          squares[i+(width*3)].innerHTML = newColumn[3]
        }
      }
    /** muriin utguudiig combine hiine */
      function combineRow() {
        for (let i =0; i < 15; i++) {
          if (squares[i].innerHTML === squares[i +1].innerHTML) {
            let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i +1].innerHTML)
            squares[i].innerHTML = combinedTotal
            squares[i +1].innerHTML = 0
          }
        }
      }
    /** baganiin utgiig combine hiine */
      function combineColumn() {
        for (let i =0; i < 12; i++) {
          if (squares[i].innerHTML === squares[i +width].innerHTML) {
            let combinedTotal = parseInt(squares[i].innerHTML) + parseInt(squares[i +width].innerHTML)
            squares[i].innerHTML = combinedTotal
            squares[i +width].innerHTML = 0
          }
        }
      }
    
      /** keycode-uudiig taaruulj baina */
      function control(e) {
        if(e.keyCode === 37) {
          keyLeft()
        } else if (e.keyCode === 38) {
          keyUp()
        } else if (e.keyCode === 39) {
          keyRight()
        } else if (e.keyCode === 40) {
          keyDown()
        }
      }
      document.addEventListener('keyup', control)
    
      function keyRight() {
        moveRight()
        combineRow()
        moveRight()
        generate()
      }
    
      function keyLeft() {
        moveLeft()
        combineRow()
        moveLeft()
        generate()
      }
    
      function keyUp() {
        moveUp()
        combineColumn()
        moveUp()
        generate()
      }
    
      function keyDown() {
        moveDown()
        combineColumn()
        moveDown()
        generate()
      }
})