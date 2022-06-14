game_running = True

def titleborders():
    print('===' * 7)

def contentborders():
    print('---' * 7)

class Player:
    def __init__(self, name):
        self.name = name
    # def __str__(self):
    #     print(f'')
    #     {self.name}

class Opponent:
    def __init__(self, name):
        self.name = name

andrea = Player('Andrea')
szilagyi = Player('Aron Szilagyi')


while game_running:
    titleborders()
    userName = input('What is your name?\n')
    chosenOpponent = input('Who would you like to fence?\n')
    player = Player(userName)
    opponent = Opponent(chosenOpponent)
    new_bout = True

    print('Will fencers ' + player.name + ' and ' + opponent.name + ' step onto the piste?  ')
    contentborders()
    
    break
