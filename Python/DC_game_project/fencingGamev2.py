class Game:
    def __init__(self):
        self.list_of_opponents = []
        self.game_state = 'init'

    def player_won(self):
        self.game_state = 'player won'

    def opponent_won(self):
        self.game_state = 'opponent won'

    def start_game(self):
        self.game_state = 'in progress'

    def end_game(self):
        self.game_state = 'init'


game = Game()
game.start_game()
