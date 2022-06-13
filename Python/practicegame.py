
from random import randint
game_running = True

def calculate_monster_attack():
    return randint(monster['attack_min'], monster['attack_max'])
    
while game_running:
    player = {'name':'Manuel','attack': 20,'heal': 16,'health': 100}
    monster = {'name':'Max','attack_min': 10, 'attack_max': 20, 'health': 100}
    new_round = True
    
    print('---' * 7)
    print('Enter Player Name:\n')
    player['name'] = input()

    print(str(player['name']) + ' is at ' + str(player['health']) + ' health.' + '\n' + str(monster['name']) + ' is at ' + str(monster['health']) + ' health.\n')

    while new_round == True:
        player_won = False
        monster_won = False
        print('Please select action: \n1)Attack\n2)Heal\n3)Exit')
        player_choice = input('Type 1, 2, or 3\n')
    
        if player_choice == '1':
            monster['health'] = monster['health'] - player['attack']
            if monster['health'] <= 0:
                player_won = True
            else:
                player['health'] = player['health'] - calculate_monster_attack()
                if player['health'] <= 0:
                    monster_won = True
        
        elif player_choice == '2':
            player['health'] = player['health'] + player['heal']
            player['health'] = player['health'] - calculate_monster_attack()
            if player['health'] <= 0:
                    monster_won = True

        elif player_choice == '3':
            game_running = False
            new_round = False
        else:
            print('Invalid Condition')

        if player_won == False and monster_won == False:
            print(player['name'] + ' has ' + str(player['health']) + ' left.')
            print(monster['name'] + ' has ' + str(monster['health']) + ' left.')

        elif player_won:
            print(player['name'] + ' won.')
            new_round = False
        
        elif monster_won:
            print(monster['name'] + ' won.')
            new_round = False
