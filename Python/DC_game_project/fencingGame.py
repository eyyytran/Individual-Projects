from random import randint

game_running = True

listOfOpponents = []


class Player:
    def __init__(self, name, speed=0, skill=0, point=0):
        self.name = name
        self.speed = speed
        self.skill = skill
        self.points = point

    def playerPoint(self):
        self.points += 1


class Opponent(Player):
    def __init__(self, name, rating='', speed=10, skill=10, point=0):
        super().__init__(name, speed, skill, point)
        self.rating = rating

    def addOpponent(self):
        listOfOpponents.append(Opponent)
        print(listOfOpponents)

    def opponentPoint(self):
        self.points += 1


szilagyi = Opponent('Aron Szilagyi', 'GOAT', 100, 100)
fox = Opponent('Chloe Fox-Gitomer', 'B', 70, 70)
joe = Opponent('Joe Shmoe', 'Unrated', 10, 10)

szilagyi.addOpponent()
fox.addOpponent()
joe.addOpponent()


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


def Training():
    trainingChoice = input(
        "Which what would you like to work on today?\n1)Bladework\n2)Conditioning\n")
    if trainingChoice == '1':
        print("You spent your morning training session on bladework drills.")
        player.skill += randint(0, 10)
    if trainingChoice == '2':
        print("You spent your morning training session on conditioning. You masochist ;)")
        player.speed += randint(0, 10)


def initGame():
    userName = input('What is your name?\n')
    chosenOpponent = input('Who would you like to fence?\n')
    global opponent, player, new_bout, player_won, opponent_won
    opponent = Opponent(chosenOpponent)
    player = Player(userName)
    new_bout = True
    player_won = False
    opponent_won = False
    # for fencer in listOfOpponents:
    #     if chosenOpponent in listOfOpponents:
    #         opponent = Opponent(chosenOpponent)
    #     if chosenOpponent not in listOfOpponents:
    # redo chosenOpponent


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


def printPoints():
    print('Score is:\n' + player.name + ' - ' + str(player.points) +
          '\n' + opponent.name + ' - ' + str(opponent.points))


while game_running:
    printTitleBorders()
    initGame()
    printGameStartMessage()
    printContentBorders()

    while new_bout:
        player_choice = getPlayerChoice()
        opponent_choice = randint(1, 3)
        chance = randint(0, 100)

        if player_choice == '1':
            if opponent_choice == 3:
                print("Attack. Attack in Preparation.")
                player.playerPoint()
            if opponent_choice == 2:
                if player.speed > opponent.skill:
                    print('Parry Riposte - No. Attack Touche.')
                    player.playerPoint()
                if player.speed == opponent.skill:
                    if chance <= 50:
                        print('Parry Riposte - No. Attack Touche.')
                        player.playerPoint()
                    if chance > 50:
                        print('Attack. Parry Riposte Touche.')
                        opponent.opponentPoint()
                if player.speed < opponent.skill:
                    print('Attack. Parry Riposte Touche.')
                    opponent.opponentPoint()
            if opponent_choice == 1:
                if player.speed > opponent.speed:
                    print('Attack. Contre Attack.')
                    player.playerPoint()
                if player.speed == opponent.speed:
                    if chance <= 50:
                        print('Attack. Contre Attack.')
                        player.playerPoint()
                    if chance > 50:
                        print('Attack. Contre Attack.')
                        opponent.opponentPoint()
                if player.speed < opponent.speed:
                    print('Attack. Contre Attack.')
                    opponent.opponentPoint()
            printPoints()
            checkPoints()

        elif player_choice == '2':
            if opponent_choice == 1:
                if player.skill > opponent.speed:
                    print('Attack. Parry Riposte Touche.')
                    player.playerPoint()
                if player.skill == opponent.speed:
                    if chance <= 50:
                        print('Attack. Parry Riposte Touche.')
                        player.playerPoint()
                    if chance > 50:
                        print('Attack Touche.')
                        opponent.opponentPoint()
                if player.skill < opponent.speed:
                    print('Attack Touche.')
                    opponent.opponentPoint()
            if opponent_choice == 2:
                print("Both fencers hesitate off the line.\nWhat's your next move?\n")
            if opponent_choice == 3:
                print('Attack Touche.')
                opponent.opponentPoint()
            printPoints()
            checkPoints()

        elif player_choice == '3':
            if opponent_choice == 1:
                print('Attack. Attack in Preparation.')
                opponent.opponentPoint()
            if opponent_choice == 2:
                print('Attack Touche')
                player.playerPoint()
            if opponent_choice == 3:
                if player.speed > opponent.speed:
                    print('Attack. Counter Attack.')
                    player.playerPoint()
                if player.speed == opponent.speed:
                    if chance <= 50:
                        print('Attack. Counter Attack.')
                        player.playerPoint()
                    if chance > 50:
                        print('Attack. Counter Attack.')
                        opponent.opponentPoint()
                if player.speed < opponent.speed:
                    print('Attack. Counter Attack.')
                    opponent.opponentPoint()
            printPoints()
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
