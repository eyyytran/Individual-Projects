from random import randint
from GameState import gameState


def initOpponents():
    opponents = [
        Opponent('Aron Szilagyi', 'GOAT', 900, 1000),
        Opponent('Kim Jung Hwan', 'A', 1000, 800),
        Opponent('Olga Kharlan', 'A', 90, 90),
        Opponent('Chloe Fox-Gitomer', 'B', 70, 70),
        Opponent('Esther Lu', 'C', 50, 50),
        Opponent('Kelmour Bucknor', 'D', 30, 30),
        Opponent('Mark Zuckerberg', 'E', 20, 20),
        Opponent('Joe Shmoe', 'U', 10, 10)
    ]
    for opponent in opponents:
        gameState.addOpponent(opponent)


# TODO move Player and Opponent to own files

class Player:
    def __init__(self, name, speed=0, skill=0, point=0):
        self.name = name
        self.speed = speed
        self.skill = skill
        self.points = point

    def __str__(self):
        return self.name

    def playerPoint(self):
        self.points += 1

    def resetPoints(self):
        self.points = 0

# TODO refactor Player and Opponent, remove the opponentPoint method, change the Player playerPoint method to be just point, method will be called as player.point() or opponent.point(), don't need to differentiate between them


class Opponent(Player):
    def __init__(self, name, rating='', speed=10, skill=10, point=0):
        super().__init__(name, speed, skill, point)
        self.rating = rating

    def __str__(self):
        return self.name + ' - ' + self.rating

    def opponentPoint(self):
        self.points += 1


def printTitleBorders():
    print('===' * 7)


def printContentBorders():
    print('---' * 7)


def printGameStartMessage():
    print('Will fencers ' + gameState.player.name + ' and ' +
          gameState.opponent.name + ' step onto the piste?  ')


def getPlayerChoice():
    return input(
        'Choose an action:\n1)Attack\n2)Parry\n3)Attack in Preparation\n4)Exit the Game\n')


def doTraining():
    trainingChoice = input(
        "Which what would you like to work on today?\n1)Bladework\n2)Conditioning\n")
    if trainingChoice == '1':
        gameState.player.skill += randint(0, 10)
        print("You work on bladework drills.\nYour skill attribute is now" +
              str(gameState.player.skill) + '.')
    if trainingChoice == '2':
        gameState.player.speed += randint(0, 10)
        print("You work conditioning.\nYou masochist ;)\nYour speed attribute is now " +
              str(gameState.player.speed) + '.')
    print("It's time for your next match.")


def setPlayer():
    name = input('What is your name?\n')
    gameState.setPlayer(Player(name))


def selectOpponent():
    printOpponentChoices()
    index = None
    while True:
        index = int(input('Select opponent: '))
        if index in range(len(gameState.listOfOpponents)):
            break
        print('Invalid input')
    selectedOpponent = gameState.listOfOpponents[index]
    gameState.setOpponent(selectedOpponent)


def printOpponentChoices():
    for index, opponent in enumerate(gameState.listOfOpponents):
        print('To fight', opponent, 'select', index)


def checkPoints():
    if gameState.player.points == 5:
        printContentBorders()
        print(gameState.player.name +
              ' has won the bout.\nSalute and shake hands.')
        printTitleBorders()
        gameState.setResult('player won')
    elif gameState.opponent.points == 5:
        printContentBorders()
        print(gameState.opponent.name +
              ' has won the bout.\nSalute and shake hands.')
        printTitleBorders()
        gameState.setResult('opponent won')


def printPoints():
    print('Score is:\n' + gameState.player.name + ' - ' + str(gameState.player.points) +
          '\n' + gameState.opponent.name + ' - ' + str(gameState.opponent.points))


def handleResult():
    while True:
        train = input(
            'Your bout is over. Would you like to train before your next one? (Y/N)\n')
        if train.lower() == 'y':
            doTraining()
            break
        if train.lower() == 'n':
            break
        print('Invalid Input: Try typing Y or N')

    while True:
        replay = input('Would you like to fence again? (Y/N)\n')
        if replay.lower() == 'y':
            gameState.playAgain()
            selectOpponent()
            printGameStartMessage()
            printContentBorders()
            break
        elif replay.lower() == 'n':
            gameState.exit()
            break
        print('Invalid Input: Try typing Y or N')


def handleChoice1(opponent_choice, chance):
    if opponent_choice == 3:
        print("Attack. Attack in Preparation.")
        gameState.player.playerPoint()
    if opponent_choice == 2:
        if gameState.player.speed > gameState.opponent.skill:
            print('Parry Riposte - No. Attack Touche.')
            gameState.player.playerPoint()
        if gameState.player.speed == gameState.opponent.skill:
            if chance <= 50:
                print('Parry Riposte - No. Attack Touche.')
                gameState.player.playerPoint()
            if chance > 50:
                print('Attack. Parry Riposte Touche.')
                gameState.opponent.opponentPoint()
        if gameState.player.speed < gameState.opponent.skill:
            print('Attack. Parry Riposte Touche.')
            gameState.opponent.opponentPoint()
    if opponent_choice == 1:
        if gameState.player.speed > gameState.opponent.speed:
            print('Attack. Contre Attack.')
            gameState.player.playerPoint()
        if gameState.player.speed == gameState.opponent.speed:
            if chance <= 50:
                print('Attack. Contre Attack.')
                gameState.player.playerPoint()
            if chance > 50:
                print('Attack. Contre Attack.')
                gameState.opponent.opponentPoint()
        if gameState.player.speed < gameState.opponent.speed:
            print('Attack. Contre Attack.')
            gameState.opponent.opponentPoint()


def handleChoice2(opponent_choice, chance):
    if opponent_choice == 1:
        if gameState.player.skill > gameState.opponent.speed:
            print('Attack. Parry Riposte Touche.')
            gameState.player.playerPoint()
        if gameState.player.skill == gameState.opponent.speed:
            if chance <= 50:
                print('Attack. Parry Riposte Touche.')
                gameState.player.playerPoint()
            if chance > 50:
                print('Attack Touche.')
                gameState.opponent.opponentPoint()
        if gameState.player.skill < gameState.opponent.speed:
            print('Attack Touche.')
            gameState.opponent.opponentPoint()
    if opponent_choice == 2:
        print(
            "Both fencers hesitate off the line.\nWhat's your next move?\n")
    if opponent_choice == 3:
        print('Attack Touche.')
        gameState.opponent.opponentPoint()


def handleChoice3(opponent_choice, chance):
    if opponent_choice == 1:
        print('Attack. Attack in Preparation.')
        gameState.opponent.opponentPoint()
    if opponent_choice == 2:
        print('Attack Touche')
        gameState.player.playerPoint()
    if opponent_choice == 3:
        if gameState.player.speed > gameState.opponent.speed:
            print('Attack. Counter Attack.')
            gameState.player.playerPoint()
        if gameState.player.speed == gameState.opponent.speed:
            if chance <= 50:
                print('Attack. Counter Attack.')
                gameState.player.playerPoint()
            if chance > 50:
                print('Attack. Counter Attack.')
                gameState.opponent.opponentPoint()
        if gameState.player.speed < gameState.opponent.speed:
            print('Attack. Counter Attack.')
            gameState.opponent.opponentPoint()


def runGame():
    printTitleBorders()
    setPlayer()
    selectOpponent()
    printGameStartMessage()
    printContentBorders()

    while not gameState.status == 'exit':
        player_choice = getPlayerChoice()
        opponent_choice = randint(1, 3)
        chance = randint(0, 100)

        if player_choice == '1':
            handleChoice1(opponent_choice, chance)
            printPoints()
            checkPoints()
        elif player_choice == '2':
            handleChoice2(opponent_choice, chance)
            printPoints()
            checkPoints()
        elif player_choice == '3':
            handleChoice3(opponent_choice, chance)
            printPoints()
            checkPoints()
        elif player_choice == '4':
            gameState.setStatus('exit')
            break
        else:
            print("Invalid Input: Try typing in a number.\n")

        if gameState.result:
            handleResult()


initOpponents()
runGame()
