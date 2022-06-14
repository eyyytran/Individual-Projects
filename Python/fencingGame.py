from random import randint

game_running = True

def titleborders():
    print('===' * 7)

def contentborders():
    print('---' * 7)

class Player:
    def __init__(self, name, speed = 0, skill = 0, point = 0):
        self.name = name
        self.speed = speed
        self.skill = skill
        self.points = point

listOfOpponents = []

class Opponent(Player):
    def __init__(self, name, rating = '', speed=10, skill=10, point=0):
        super().__init__(name, speed, skill, point)
        self.rating = rating
    def addOpponent(self):
        listOfOpponents.append(Opponent)
        print(listOfOpponents)

# szilagyi = Opponent('Aron Szilagyi', 'GOAT', 100,100)
# fox = Opponent('Chloe Fox-Gitomer', 'B', 70, 70)
# joe = Opponent('Joe Shmoe', 'Unrated', 0, 0)

# szilagyi.addOpponent()
# fox.addOpponent()
# joe.addOpponent()

def playerPoint():
    player.points += 1
    print('The score is:\n' + player.name + ' - ' + str(player.points) + '\n'+ opponent.name + ' - ' + str(opponent.points))  

def opponentPoint():
    opponent.points += 1
    print('The score is:\n' + player.name + ' - ' + str(player.points) + '\n'+ opponent.name + ' - ' + str(opponent.points))  

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

        opponent_choice = 3 #put randint later

        if player_choice == '1':
            if opponent_choice == 3:
                playerPoint()
                if player.points == 5:
                    player_won = True
                    print(player.name + ' has won the bout.\nSalute and shake hands.') 
            if opponent_choice == 2:
                if player.speed >= opponent.skill:
                    playerPoint()
                    if player.points == 5:
                        player_won = True
                        print(player.name + ' has won the bout.\nSalute and shake hands.') 
                if player.speed <= opponent.skill:
                    opponentPoint()
                    if opponent.points == 5:
                        opponent_won = True
                        print(opponent.name + ' has won the bout.\nSalute and shake hands.')
            if opponent_choice == 1:
                if player.speed >= opponent.speed:
                    playerPoint()
                    if player.points == 5:
                        player_won = True
                        print(player.name + ' has won the bout.\nSalute and shake hands.') 
                if player.speed <= opponent.speed:
                    opponentPoint()
                    if opponent.points == 5:
                        opponent_won = True
                        print(opponent.name + ' has won the bout.\nSalute and shake hands.')

        if player_choice == '2':
            pass
        elif player_choice == '3':
            pass
        elif player_choice == '4':
            new_bout = False    
        
        elif player_won == True or opponent_won == True:
            new_bout = False

        # else:
        #     print('Invalid input - Try again with an integer (1-4).')

    break
