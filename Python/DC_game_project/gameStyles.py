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
