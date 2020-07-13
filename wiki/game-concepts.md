# Basic game concepts

Below you can find a short high level overview of basic game concepts.

## Public works

Player accumulates `public work points` by specialized buildings or `slavery`. Then he can spend those points to build various tile improvements.

Tile improvements consume some `public work points` per turn. When run out of `public work points` random tile improvement is damaged.

## Military

All military units have the following attributes:

- power
- movement points (**MP**)
- health points (**HP**)
- supply points (**SP**)
- ...various bonuses

#### **Recruting**

#### **Supplies**

Supplies is the concept that limits the power of stacks of doom and adds a bit of tactics and deep to the combat. It also limits the potential of military units being used as scouts and explorers.

- Each unit have supply points.
- Supply points will deteriorate when in foreign territory.
- When supplies are deteriorated, the health points will start to decrease which can lead to the unit being disbanded.
- Supply points can be replenished by pillaging tile improvements or cities, by defeating enemy army and taking over their supplies or by intercepting enemy supply units.
- To take care of the supply lines the player must build a special supply unit.
- Supply units also have supply points, though much more of them. They replenish some amount of other units SP when they are in range. The equivalent amount of SP is taken from the supply unit.
- Supply units can replenish the SP in cities.

#### **Zone of control (ZOC)**

Each military unit establishes zone of control which consists of neighbouring tiles (naval or land depending on unit type). If an enemy controls a particular tile:

- Moving to that tile costs twice as much.
- City cannot work on this tile.
- Supply lines are blocked.
- When a unit is surrounded by enemy ZOC then it starts to lose SP even if it's on a friendly territory.

#### Unit stacking

- Military units can stack together.
- The maximum stack size is based on player's bonuses.
- When attacking stacked units the defenders issue the best unit.
- Stacked units can be grouped together and move as one.
- The speed of the group is limited by it's slowest unit.

#### Armies

- A general can transform a group into an army.
- An army fights as one unit.
- Damage to an army is distributed evenly across all units (with small random variations)
- Generals gain experience in fights. Higher level generals provide better bonuses and can operate larger armies.
- TODO combat algorithm
- TODO how to recruit generals?

## Slavery

Early economies can greatly benefit from slavery. Later in the game slavery generates more and more unhapinness and it become beneficial to abolish slavery. By picking the right bonuses the players can keep the slavery to the end of the game and it will still be profitable.

Each city have it's slavery output per turn. The player also have global slavery points.

Slaves are part of cities population and are taken into account when processing city population logic.

#### Slavery sources

- Defeating enemy units.
- Pillaging.
- Sacking cities.
- Trade routes.
- Buildings e.g. slave market

#### Slavery usage

- Part of slavery output in a city is added to production when constructing buildings.
- Global slavery points can used be to speed up a production in a city.
- Speeding up building production by consuming global slavery points + some food/population
- TODO Public works, how?

## Resources

There is no distinction between strategic and luxury resources. Each resource have it's own bonuses which can be extended with buildings, techs and other bonuses.

Each resource has:

- yields bonuses
- quantity
- other bonuses (health, happiness)

Resources can be traded using trade network. Players can prevent certain resources from going into trade network if they want to keep those resources for themselfs.
They can also embarg certain players from getting certain resources from you.

## Economy

### Yields

At the beginning of the game tile yields are very poor. River valleys are the only sensible sources of food and resources are the only source of production and gold + they can yield some extra food. Various bonuses later in the game increases the yields making other areas worth colonizing.

A great deal of production can be aquired from slavery. In case of gold, trade routes can do tremendous job.

## Trade

Trade is represented as a graph with cities as nodes and trade routes as edges.

- When a city establishes a trade route with another city, a portion of it's food, gold, culture, science, slavery and luxuries are duplicated and transfered through the route to the other city.
- Trade routes work two ways and are beneficial for both sides. They are not symmetrical though and the goods transfered in both ways can differ.
- Various bonuses can enhance the quantity of the transfered goods.
- The bonuses distinct between domestict/foreign trade routes and land/overseas trade routes.
- Pillaging a trade route nullify it's transfer for x turns. All yields are added to the pillager's global yields. Pillager also have it's SP replenished.
- Trade routes have maximum length (enhanceable).
- A trade route from A to B visits all cities in-between.
- Trade routes can stack if they occupy the same edge.
- A market is required to join the city into trade network.
- Land trade routes require a road or river connection.
- Each edge carries goods from a list of cities.

#### Resources

- If a city needs a particular resource it takes it from the route and put some gold in the opposite direction.
- Each edge in the network define a resource demand which is calculated by the needs of the cities which are connected to that edge.
- A city put all excessive resources to the trade network. It is ditributed proportionally to the edges's demand.
- The bigger the city the larger quantity of the resource a city require.

## Science

TODO

## Diplomacy

TODO

## Internal politics

TODO

## Culture

TODO

## Espionage

TODO

## Religion

TODO

## Nation

TODO

## Health
