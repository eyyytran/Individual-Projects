class Player:
    def __init__(self, name, speed=0, skill=0, point=0):
        self.name = name
        self.speed = speed
        self.skill = skill
        self.points = point

    def __str__(self):
        return self.name

    def addPoint(self):
        self.points += 1

    def resetPoints(self):
        self.points = 0
