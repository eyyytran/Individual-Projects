listOfOpponents = []


class Opponent(Player):
    def __init__(self, name, rating='', speed=10, skill=10, point=0):
        super().__init__(name, speed, skill, point)
        self.rating = rating
