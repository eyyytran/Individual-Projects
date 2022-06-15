from random import randint

game_running = True

listOfOpponents = []


class Player:
    def __init__(self, name, speed=0, skill=0, point=0):
        self.name = name
        self.speed = speed
        self.skill = skill
        self.points = point


class Opponent(Player):
    def __init__(self, name, rating='', speed=10, skill=10, point=0):
        super().__init__(name, speed, skill, point)
        self.rating = rating

    def addOpponent(self):
        listOfOpponents.append(Opponent)
        print(listOfOpponents)


def printTitleBorders():
    print('===' * 7)


def printContentBorders():
    print('---' * 7)


def printGameStartMessage():
    print('Will fencers ' + player.name + ' and ' +
          opponent.name + ' step onto the piste?  ')


def getPlayerChoice():
    return input(
        'Choose an action:\n1)Attack\n2)Parry\n3)Attack in Preparation\n4)Exit the Game\n')


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

    def playerPoint():
        player.points += 1
        print('The score is:\n' + player.name + ' - ' + str(player.points) +
              '\n' + opponent.name + ' - ' + str(opponent.points))

    def opponentPoint():
        opponent.points += 1
        print('The score is:\n' + player.name + ' - ' + str(player.points) +
              '\n' + opponent.name + ' - ' + str(opponent.points))

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
        opponent_choice = randint(1, 3)
        chance = randint(0, 100)

        if player_choice == '1':
            if opponent_choice == 3:
                print("Attack. Attack in Preparation.")
                playerPoint()
            if opponent_choice == 2:
                if player.speed > opponent.skill:
                    print('Parry Riposte - No. Attack Touche.')
                    playerPoint()
                if player.speed == opponent.skill:
                    if chance <= 50:
                        print('Parry Riposte - No. Attack Touche.')
                        playerPoint()
                    if chance > 50:
                        print('Attack. Parry Riposte Touche.')
                        opponentPoint()
                if player.speed < opponent.skill:
                    print('Attack. Parry Riposte Touche.')
                    opponentPoint()
            if opponent_choice == 1:
                if player.speed > opponent.speed:
                    print('Attack. Contre Attack.')
                    playerPoint()
                if player.speed == opponent.speed:
                    if chance <= 50:
                        print('Attack. Contre Attack.')
                        playerPoint()
                    if chance > 50:
                        print('Attack. Contre Attack.')
                        opponentPoint()
                if player.speed < opponent.speed:
                    print('Attack. Contre Attack.')
                    opponentPoint()
            print(opponent_choice)
            checkPoints()

        elif player_choice == '2':
            if opponent_choice == 1:
                if player.skill > opponent.speed:
                    print('Attack. Parry Riposte Touche.')
                    playerPoint()
                if player.skill == opponent.speed:
                    if chance <= 50:
                        print('Attack. Parry Riposte Touche.')
                        playerPoint()
                    if chance > 50:
                        print('Attack Touche.')
                        opponentPoint()
                if player.skill < opponent.speed:
                    print('Attack Touche.')
                    opponentPoint()
            if opponent_choice == 2:
                print("Both fencers hesitate off the line.\nWhat's your next move?\n")
            if opponent_choice == 3:
                print('Attack Touche.')
                opponentPoint()
            print(opponent_choice)
            checkPoints()

        elif player_choice == '3':
            if opponent_choice == 1:
                print('Attack. Attack in Preparation.')
                opponentPoint()
            if opponent_choice == 2:
                print('Attack Touche')
                playerPoint()
            if opponent_choice == 3:
                if player.speed > opponent.speed:
                    print('Attack. Counter Attack.')
                    playerPoint()
                if player.speed == opponent.speed:
                    if chance <= 50:
                        print('Attack. Counter Attack.')
                        playerPoint()
                    if chance > 50:
                        print('Attack. Counter Attack.')
                        opponentPoint()
                if player.speed < opponent.speed:
                    print('Attack. Counter Attack.')
                    opponentPoint()
            print(opponent_choice)
            checkPoints()

        elif player_choice == '4':
            new_bout = False

        elif player_choice != '1' or '2' or '3' or '4':
            print("Invalid Input: Try typing in a number.\n")

        if player_won == True or opponent_won == True:
            replay = input('Would you like to fence again? (Y/N)\n')
            if replay.lower() == 'y':
                new_bout = True
            elif replay.lower() == 'n':
                new_bout = False
            elif replay.lower() != 'y' or 'n':
                print('Invalid Input: Try typing Y or N')
    break
