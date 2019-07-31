class Matrice {
    constructor(rows, cols){
        this.rows = rows
        this.cols = cols
        this.board = this.createBoard(rows, cols)
    }

    createBoard(rows, cols){
        let matrice = []
        for(let r = 0; r < rows; r++){
            matrice[r] = []
            for(let c = 0; c < cols; c++){
                matrice[r].push('.')
            }
        }

        return matrice
    }
    
    
}