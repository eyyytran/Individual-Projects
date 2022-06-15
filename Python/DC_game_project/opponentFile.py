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
