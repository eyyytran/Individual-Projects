
from random import randint
game_running = True

game_results = []

def calculate_monster_attack():
    return randint(monster['attack_min'], monster['attack_max'])

def game_ends(winner_name):
    print(f'{winner_name} Won')
    
while game_running:
    counter = 0
    player = {'name':'Manuel','attack': 20,'heal': 16,'health': 100}
    monster = {'name':'Max','attack_min': 10, 'attack_max': 20, 'health': 100}
    new_round = True
    
    print('---' * 7)
    print('Enter Player Name:\n')
    player['name'] = input()

    print(str(player['name']) + ' is at ' + str(player['health']) + ' health.' + '\n' + str(monster['name']) + ' is at ' + str(monster['health']) + ' health.\n')

    while new_round == True:
        counter += 1
        player_won = False
        monster_won = False
        print('Please select action: \n1)Attack\n2)Heal\n3)Exit\n4) Print Results')
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

        elif player_choice == '4':
            for player_stat in game_results:
                print(player_stat)
                
        else:
            print('Invalid Condition')

        if player_won == False and monster_won == False:
            print(player['name'] + ' has ' + str(player['health']) + ' left.')
            print(monster['name'] + ' has ' + str(monster['health']) + ' left.')

        elif player_won:
            game_ends(player['name'])
            round_result = {'name':player['name'], 'health':player['health'], 'rounds':counter}
            game_results.append(round_result)
            print(game_results)
            new_round = False
        
        elif monster_won:
            game_ends(monster['name'])
            round_result = {'name':player['name'], 'health':player['health'], 'rounds':counter}
            game_results.append(round_result)
            print(game_results)
            new_round = False
