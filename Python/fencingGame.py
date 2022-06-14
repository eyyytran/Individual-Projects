from random import randint

# class Game:
#     def __init__(self):
#         self.list_of_opponents = []
#         self.game_state = 'init'

#     def player_won(self):
#         self.game_state = 'player won'

#     def opponent_won(self):
#         self.game_state = 'opponent won'

#     def start_game(self):
#         self.game_state = 'in progress'

#     def end_game(self):
#         self.game_state = 'init'

# game = Game()
# game.start_game()


game_running = True


def printTitleBorders():
    print('===' * 7)


def printContentBorders():
    print('---' * 7)


class Player:
    def __init__(self, name, speed=0, skill=0, point=0):
        self.name = name
        self.speed = speed
        self.skill = skill
        self.points = point


listOfOpponents = []


class Opponent(Player):
    def __init__(self, name, rating='', speed=10, skill=10, point=0):
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
    print('The score is:\n' + player.name + ' - ' + str(player.points) +
          '\n' + opponent.name + ' - ' + str(opponent.points))


def opponentPoint():
    opponent.points += 1
    print('The score is:\n' + player.name + ' - ' + str(player.points) +
          '\n' + opponent.name + ' - ' + str(opponent.points))


def getPlayerChoice():
    return input(
        'Choose an action:\n1)Attack\n2)Parry\n3)Attack in Preparation\n4)Exit the Game\n')


def printGameStartMessage():
    print('Will fencers ' + player.name + ' and ' +
          opponent.name + ' step onto the piste?  ')


player_won = False
opponent_won = False

while game_running:
    printTitleBorders()
    userName = input('What is your name?\n')
    chosenOpponent = input('Who would you like to fence?\n')
    player = Player(userName)
    opponent = Opponent(chosenOpponent)
    new_bout = True
    printGameStartMessage()
    printContentBorders()

    def checkPoints():
        if player.points == 5:
            printContentBorders()
            print(player.name + ' has won the bout.\nSalute and shake hands.')
            printTitleBorders()
            global player_won
            player_won = True
        elif opponent.points == 5:
            printContentBorders()
            print(opponent.name + ' has won the bout.\nSalute and shake hands.')
            printTitleBorders()
            global opponent_won
            opponent_won = True

    while new_bout:
        player_choice = getPlayerChoice()
        # TODO: if player_choice not valid input ->
        #     print('Invalid input - Try again with an integer (1-4).')
        opponent_choice = randint(1, 3)

        if player_choice == '1':  # player attacks
            if opponent_choice == 3:  # opponent does attack in prep
                playerPoint()
            if opponent_choice == 2:  # opponent parries
                if player.speed >= opponent.skill:
                    playerPoint()
                if player.speed <= opponent.skill:
                    opponentPoint()
            if opponent_choice == 1:  # opponent attacks
                if player.speed >= opponent.speed:
                    playerPoint()
                if player.speed <= opponent.speed:
                    opponentPoint()
            print(opponent_choice)
            checkPoints()
        elif player_choice == '2':  # player parries
            if opponent_choice == 1:
                if player.skill >= opponent.speed:
                    playerPoint()
                if player.skill <= opponent.speed:
                    opponentPoint()
            if opponent_choice == 2:
                print("Both fencers hesitate off the line.\nWhat's your next move?\n")
            if opponent_choice == 3:
                opponentPoint()
            print(opponent_choice)
            checkPoints()
        elif player_choice == '3':
            if opponent_choice == 1:
                opponentPoint()
            if opponent_choice == 2:
                playerPoint()
            if opponent_choice == 3:
                if player.speed >= opponent.speed:
                    playerPoint()
                if player.speed <= opponent.speed:
                    opponentPoint()
            print(opponent_choice)
            checkPoints()

        elif player_choice == '4':
            new_bout = False

        print('player won', player_won)
        print('opponent won', opponent_won)
        if player_won == True or opponent_won == True:
            new_bout = False
    break
