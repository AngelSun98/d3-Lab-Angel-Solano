
from terrain.terrain_type import *
from characters.soldier import Soldier
from characters.jedi import Jedi
from characters.clan import Clan
from army.army import Army
from map.map import Map
from map.field import *
from characters.character_type import CharacterType
from army.army_deploy import ArmyDeploy

m = Map(500, 500)
m.assign_type(TerrainType.FOREST)
# print(m)

deploy = ArmyDeploy.SQUARE
sizeBlue = 1000
sizeRed = 1000
a = Army(Clan.BLUE)
a.army_type = CharacterType.SOLDIER
# a.deploy = ArmyDeploy.HORIZONTAL
a.deploy = deploy
a.createArmy(sizeBlue)

b = Army(Clan.RED)
b.army_type = CharacterType.JEDI_KNIGHT
b.deploy = deploy
b.createArmy(sizeRed)

launch(m, a, b)


