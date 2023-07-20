
class Game {
    constructor() {
        this.gameScreen = document.getElementById("game-screen")
        this.player = new Player(
            this.gameScreen,
            200,
            500,
            100,
            150,
            "./images/car.png"
        )
        this.startScreen = document.getElementById("game-intro")
        this.width = "500px"
        this.height = "700px"
        this.obstacles = []
        this.score = 0
        this.lives = 3
        this.gameIsOver = false
        this.gameEndScreen = document.getElementById("game-end")
    }

    start() {
        this.gameScreen.style.width = this.width
        this.gameScreen.style.height = this.height

        // hide the starter screen
        this.startScreen.style.display = "none"

        //// display the game screen
        this.gameScreen.style.display = "block"

        //// START THE GAME LOOP
        this.gameLoop()

    }

    gameLoop() {
    
        if (this.gameIsOver) {
            console.log("The game is over")
            return
        }

        this.update()

        window.requestAnimationFrame(() => this.gameLoop())

    }


    update() {
        this.player.move()

    }
}
