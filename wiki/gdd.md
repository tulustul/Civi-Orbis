# Table of contents

- [Overview](#Overview)
- [Military](#Military)
  - [Supplies](#Supplies)
  - [Zone of control (ZOC)](<#Zone-of-control-(ZOC)>)
  - [Unit stacking](#Unit-stacking)
  - [Armies](#Armies)
- [Resources](#Resources)
- [Economy](#Economy)
- [Trade](#Trade)
- [Knowledge](#Knowledge)
- [Nation](#Nation)
- [Slavery](#Slavery)
- [Public works](#Public-works)

## Overview

`Civi orbis` is a turn based strategy game inspired by Civilization series. Some may even say it's a Civilization clone. The base concept is the same as in Sid Meier's famous title and a lot of mechanics are very similar. For this reason I won't write a lot about the game's concept. Let's just say it is about **leading a civilization from prehistory to modern times**.
Despite being the civ clone, the game has some distinct attributes which in my opinion justify is's creation.

### Why another civ clone?

- There is no good open source alternative to civ.
  - [FreeCiv](http://www.freeciv.org/) mimics old and outdated civ 2 and is written in an unsafe language.
  - [Unciv](https://github.com/yairm210/Unciv) is a pure civ 5 clone so why not play civ 5?
- I disagree with a lot of design choices in Civilization series, `Civi Orbis` is going to be my interpretation of the Sid Meier's idea.
- Civilization games and most of it's clones require a powerful gaming pc. I have a brand new business laptop and I can barely run Civ 5 which is already a 10 years old game. Therefore `Civi Orbis` is going to have a simple, clear 2d graphics and low spec requirements.
- It will run in your browser. Accessible everywhere, runs on anything, clear path to mobile version.
- The turn times in classic civ games are terrible, especially in late game. This can be improved.

### Design philosophy

#### Emphasis on historic correctness

It is much less a computer board game and much more a world history simulator. All the core mechanics are modeled after real world. This makes the overall feel of the game very different than in Civilization series.

#### A game about decision making

A decision making in a classic civ game is a choice between one benefit and the other. I believe that choosing between good and good is not a real choice. Here we brake that rule. Most of the decisions have a positive and a negative side effect just like in the real world. You have to sacrifice something to gain what you need.

### Game title

`Civi orbis` means `People of the world`. At least I hope so because I don't know latin :) First and foremost it sounds cool. It also corresponds with one the game's main distinct features -> nations.

## Military

All military units have the following attributes:

- power
- movement points (**MP**)
- health points (**HP**)
- supply points (**SP**)
- ...various bonuses

### **Recruting**

### **Supplies**

Supplies is the concept that limits the power of stacks of doom and adds a bit of tactics and deep to the combat. It also limits the potential of military units being used as scouts and explorers.

- Each unit have supply points.
- Supply points will deteriorate when in foreign territory.
- When supplies are deteriorated, the health points will start to decrease which can lead to the unit being disbanded.
- Supply points can be replenished by pillaging tile improvements or cities, by defeating enemy army and taking over their supplies or by intercepting enemy supply units.
- To take care of the supply lines the player must build a special supply unit.
- Supply units also have supply points, though much more of them. They replenish some amount of other units SP when they are in range. The equivalent amount of SP is taken from the supply unit.
- Supply units can replenish the SP in cities.

### **Zone of control (ZOC)**

Each military unit establishes zone of control which consists of neighbouring tiles (naval or land depending on unit type). If an enemy controls a particular tile:

- Moving to that tile costs twice as much.
- City cannot work on this tile.
- Supply lines are blocked.
- When a unit is surrounded by enemy ZOC then it starts to lose SP even if it's on a friendly territory.

### Unit stacking

- Military units can stack together.
- The maximum stack size is based on player's bonuses.
- When attacking stacked units the defenders issue the best unit.
- Stacked units can be grouped together and move as one.
- The speed of the group is limited by it's slowest unit.

### Armies

- A general can transform a group into an army.
- An army fights as one unit.
- Damage to an army is distributed evenly across all units (with small random variations)
- Generals gain experience in fights. Higher level generals provide better bonuses and can operate larger armies.
- TODO combat algorithm
- TODO how to recruit generals?

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

- When a city establishes a trade route with another city, a portion of it's food, gold, culture, knowledge, slavery and luxuries are duplicated and transfered through the route to the other city.
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

### Resources

- If a city needs a particular resource it takes it from the route and put some gold in the opposite direction.
- Each edge in the network define a resource demand which is calculated by the needs of the cities which are connected to that edge.
- A city put all excessive resources to the trade network. It is ditributed proportionally to the edges's demand.
- The bigger the city the larger quantity of the resource a city require.

## Knowledge

Knowledge is the equivalent of science is the classic civ games. Knowledge seems to be a better metaphor though since in old times there was no science and scientist but there was knowledge and wise mans. It also sounds more proper that civilization accumulate knowledge than accumulate science. In later stages of the game players can transfer some gold into knowledge which is a good enough metaphor of modern scientific research.

The mechanic is pretty much the same as in civ games. Various buildings/politics/trade routes/tiles generate knowledge points. These points are used to research technologies in the tech tree.

### Tech tree

- New tech unlocks new staff and grant bonuses.
- The tech may have specific requirements like resources or politics
- Some technologies are optional

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

Nation is a mechanism that steers centrifugal forces of a state and adds an organic feeling to the game.

- The game starts with a few tribes.
- Several players can share the same tribe.
- Culture points are used to enhance a tribe into a nation.
- Each nation have specific bonuses.
- There is a specific "tech" tree for nations called `culture tree`, culture points are used to progress through that tree.
- The `culture tree` is not linear like the `tech tree`. It starts in the center and branches in all directions. It's up to the player how the nation will develop, some branches might never even be started.
- The city will use bonuses of a nation with most representatives in the city. (Maybe use bonuses proportional to population?)
- Each tile have a distribution of population
- Each nation and each city have a `culture strength` and

#### Some general clues

- Some nations may be resistant to occupation and rebel often, other may be artistic, some are traders...
- A typical empire consists of many conquered nations, each with it's own traits meaning that different parts of empires may have very different needs and require special treatment.
- Maybe it's worth to have a federal government or grant autonomy to some trouble nations?
- City or whole nations can rebel if treated badly.
- Sometimes a genocide on a nation might be a solution :)

## Health

## Slavery

Early economies can greatly benefit from slavery. Later in the game slavery generates more and more unhapinness and it become beneficial to abolish slavery. By picking the right bonuses the players can keep the slavery to the end of the game and it will still be profitable.

Each city have it's slavery output per turn. The player also have global slavery points.

Slaves are part of cities population and are taken into account when processing city population logic.

### Slavery sources

- Defeating enemy units.
- Pillaging.
- Sacking cities.
- Trade routes.
- Buildings e.g. slave market

### Slavery usage

- Part of slavery output in a city is added to production when constructing buildings.
- Global slavery points can used be to speed up a production in a city.
- Speeding up building production by consuming global slavery points + some food/population
- TODO Public works, how?

## Public works

Player accumulates `public work points` by specialized buildings or `slavery`. Then he can spend those points to build various tile improvements.

Tile improvements consume some `public work points` per turn. When run out of `public work points` random tile improvement is damaged.
