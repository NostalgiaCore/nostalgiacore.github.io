# Releases

## [**1.1.0_01**](https://github.com/kotyaralih/NostalgiaCore/releases/tag/NostalgiaCore_1.1.0_01) <Badge type="warning" text="Latest"/>

### Fixes
- Fixed items getting removed from tileentities (could cause client crashes)

## [**1.1.0**](https://github.com/kotyaralih/NostalgiaCore/releases/tag/NostalgiaCore_1.1.0)

### Player
- Re-added fly kicking
- Chunks will reorder when a player moves

### World
- Autosave now correctly stores all data

### Fixes
- Chests now appear correctly after being replaced
- Fixed division by 0 when skeleton shoots a player
- Fixed entities targeting dead players
- Corrected distance calculations
- Fixed AABB for carpets
- Fixed item collection ID check
- Fixed crafting with full inventory
- Fixed player teleport
- Fixed painting placement

## [**1.1.0 beta 4**](https://github.com/kotyaralih/NostalgiaCore/releases/tag/NostalgiaCore_1.1.0beta4)
This is probably the last beta that will do major changes to the core. All next commits will probably contain bugfixes to improve stability of the server.

### General
- Having low tps doesnt make server unplayable now

### Entities
- Water affects entity motion
- Changing worlds will not crash the client if one of the levels has too many entities
- An attempt to synchronize minecarts on clientside and serverside
 - Not possible to do perfectly, but definitely possible to do better than what is currently in nc

### Blocks
- Rewrote block updates
- Rewrote liquid physics

### Fixes
- Fixed arrow collisions with certain non full blocks
- Fixed player hurt sound
- Fixed player data not saving after `stop` was executed
- Fixed difficulty affecting player damage
- Fixed entity armor
- Fixed invalid radius to make creeper explode
- Fixed sword not getting additional damage when breaking blocks

### Experimental
- Changed entity spawning
- Tweaked inventory on server side

### Known problems
- Paintings are broken on clientside after teleporting between worlds

## [**1.1.0 beta 3**](https://github.com/kotyaralih/NostalgiaCore/releases/tag/NostalgiaCore_1.1.0beta3)
First NostalgiaCore beta that implemented (probably) every feature that will be in final 1.1.0.

### Entities
- Fixed collisions with blocks
- Breeding
- Projectiles

### General
- Fixed the server sometimes not being stopped correctly after crash

### Known problems
- Liquid physics is broken -> no entity physics in flowing water
- Hotbar is broken(it uses 0.7 way to store itself(history of recently held items), while 0.8 changed it)
 - A possible cause of broken crafting too
- Entity spawning requires some balancing
 - No light
- Changing worlds may crash the client due to the server trying to add entity ids that were previously removed

## [**1.1.0 beta 2**](https://github.com/kotyaralih/NostalgiaCore/releases/tag/NostalgiaCore_1.1.0beta2)
Second beta of 1.1.0 that aims to make entity movement smoother and improve stability of NC 1.1.0beta1.

### General
- Fixed crash when tickerFunction tries to call invalid callback
- Replaced entities in internal database with array of entities sorted by chunks. (Should improve performance of EntityAPI::getRadius and as such allow to add more complex AI tasks)

### Entities
- Entity movement was completely rewritten to be smoother
- Better Item Entity physics
- Added experimental mob pushing(disabled in config by default because of possible performance problems)
- Added knockback for players

### Network
- Entity movement is sent from another queue
- Block updates are sent from another queue

### Small bug fixes/Tweaks
- Fixed item durability
- Fixed bed spawnpoint position
- Fixed Player::teleport damaging the player in certain cases
- Tweaked collisions between entities and blocks

### Known problems
- A player might randomly stop receiving packets while still being able to send them
 - Possibly fixed already?
- Switching between worlds may cause a client crash
 - Caused by readding previously removed entity ids, might require a lot of work to fix
- Collisions with non-standard blocks are not perfect
- Certain entity position is wrong on client-side(Item entities on farmland, primed tnt).

### Removed
- Removed certain Entity AI actions(temporary)

### Experimental
- Entity spawning reworked, spawned entities will despawn if player is too far away.

### Not yet implemented
- Projectiles
- Breeding

## [**1.1.0 beta 1**](https://github.com/kotyaralih/NostalgiaCore/releases/tag/NostalgiaCore_1.1.0beta1)
First beta of one of the largest NostalgiaCore updates(originally supposed to be a small update which adds entities folder).

### General
- PHP8 support
- API Bump to 12.1
- QueryAPI
- PHAR plugins

### Level
- New random block update system(like pmmp1.4/vanilla)
- Entities will spawn in the world

### Entities
- New entity system
- Entity AI
- Minecarts

### Small Tweaks/Fixes
- Cake can be crafted
- Vanilla durability of tools and armor
- Removed "Moved Too Quickly" message
- Max Stack Size of some items is fixed
- Rail connection tweaked
- Players are invisible in spectator
- Fall damage completely reworked
- Obisidian generator fixed
- Void damage fix
- Armor system reworked

### Experimental stuff/Not finished/Broken stuff
- Vanilla level generator(not finished, contains bugs)
- Arrows(removed due to some problems)
- Snowball, egg entities(not implemented)
- Pathfinder(not finished, disabled due to amount of lags it causes)
- Entity pushing(removed due to memory leak)
- Entity breeding(started implementing, didnt finish because of possible performance issues)

## [**1.0.1_01**](https://github.com/kotyaralih/NostalgiaCore/releases/tag/NostalgiaCore_1.0.1_01)
A small fix of NC 1.0.1. All the changes will be included in 1.0.2.

### Changes
- Nether reactor can be disabled in extra.properties.
- Nether reactor can be activated only if player is in survival.
- Void damage is fixed.
- Using float value for api version parsing.
- Console works on android(termux, pocketmine server app).
- TNT force was reduced to 3.
- Trapdoors can be placed on stairs, slabs and glowstone.

## [**1.0.1**](https://github.com/kotyaralih/NostalgiaCore/releases/tag/NostalgiaCore_1.0.1)

### Changes
After NostalgiaCore 1.0 pull request fixes:

- cactus tweaks by @GameHerobrine in [#10](https://github.com/kotyaralih/NostalgiaCore/pull/10)
- Rail Connection port from Nukkit by @GameHerobrine in [#11](https://github.com/kotyaralih/NostalgiaCore/pull/11)
- Tree Generation Tweaks by @GameHerobrine in [#12](https://github.com/kotyaralih/NostalgiaCore/pull/12)
- Readme update by @GameHerobrine in [#13](https://github.com/kotyaralih/NostalgiaCore/pull/13)
- Explosion Tweaks by @GameHerobrine in [#14](https://github.com/kotyaralih/NostalgiaCore/pull/14)
- enable-explosions option(allows you to turn off tnt explosions) by @GameHerobrine in [#15](https://github.com/kotyaralih/NostalgiaCore/pull/15)
- leaf decay port from newest pocketmine by @GameHerobrine in [#16](https://github.com/kotyaralih/NostalgiaCore/pull/16)
- milk is now obtainable, sheep can be sheared by @GameHerobrine in [#17](https://github.com/kotyaralih/NostalgiaCore/pull/17)
- chickens can hatch eggs, shears fix by @GameHerobrine in [#18](https://github.com/kotyaralih/NostalgiaCore/pull/18)
- baby entities can spawn from eggs, minecarts by @GameHerobrine in [#19](https://github.com/kotyaralih/NostalgiaCore/pull/19)
- nether reactor? by @GameHerobrine in [#20](https://github.com/kotyaralih/NostalgiaCore/pull/20)
- fixed dyes by @GameHerobrine in [#21](https://github.com/kotyaralih/NostalgiaCore/pull/21)
- isBaby added to entities.yml, armor fix by @GameHerobrine in [#22](https://github.com/kotyaralih/NostalgiaCore/pull/22)
- armor fix x2(forgot to upload item files by @GameHerobrine in [#23](https://github.com/kotyaralih/NostalgiaCore/pull/23)
- Fixes by @GameHerobrine in [#24](https://github.com/kotyaralih/NostalgiaCore/pull/24)

Full Changelog: [https://github.com/kotyaralih/NostalgiaCore/commits/NostalgiaCore_1.0.1](https://github.com/kotyaralih/NostalgiaCore/commits/NostalgiaCore_1.0.1)

---