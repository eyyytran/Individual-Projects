game_running = True

def titleborders():
    print('===' * 7)

def contentborders():
    print('---' * 7)

class Player:
    def __init__(self, name, speed, skill):
        self.name = name
        self.speed = speed
        self.skill = skill

class Opponent(Player):
    def __init__(self, name, speed, skill, rating):
        super().__init__(name, speed, skill)
        self.rating = rating

szilagyi = Opponent('Aron Szilagyi',100,100,'A')

fox = Opponent('Chloe Fox-Gitomer', 70, 70, 'C')


while game_running:
    titleborders()
    userName = input('What is your name?\n')
    chosenOpponent = input('Who would you like to fence?\n')
    player = Player(userName)
    opponent = Opponent(chosenOpponent)
    new_bout = True

    print('Will fencers ' + player.name + ' and ' + opponent.name + ' step onto the piste?  ')
    contentborders()

    while new_bout:
        player_won = False
        opponent_won = False
        
        player_choice = input('Choose an action:\n1)Attack\n2)Parry\n3)Attack in Preparation\n4) Exit the Game\n')

        if player_choice == '1':
            pass
        elif player_choice == '2':
            pass
        elif player_choice == '3':
            pass
        elif player_choice == '4':
            new_bout = False    
        else:
            print('Invalid input - Try again with an integer (1-4).')

    break
