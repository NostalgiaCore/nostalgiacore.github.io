# AchievementAPI

## Functions

### static `addAchievement(achievementID, achievementName, requires = [])`
#### Description
* Adds some achievement
#### Arguments
* `achievementID` - id of the achievement
* **`string`** `achievementName` - name of the achievement
* **`array`** `requires` - array of achievement ids that are required to be unlocked for player to be able to get the achievement.
#### Returns
* `true` if the achievement was added successfully, `false` otherwise.

***

### static `grantAchievement(Player player, achievementID)`
#### Description
* Gives some achievement to player
#### Arguments
* **`Player`** `player` - [[Player]] instance
* `achievemenetID` - id of the achievement
#### Returns
* `true` if the achievement was granted, `false` otherwise

***

### static `hasAchievement(Player player, achievementID)`
#### Description
* Checks does a player have some achievement
#### Arguments
* **`Player`** `player` - [[Player]] instance
* `achievemenetID` - id of the achievement
#### Returns
* `true` if the player has the achievement, `false` otherwise
***

### static `broadcastAchievement(Player player, achievementID)`
#### Description
* Broadcasts the achievement to the chat.
* If the achivement exists, the function will call [[achievement.broadcast|Events#achievement.broadcast]] event.
#### Arguments
* **`Player`** `player` - [[Player]] instance
* `achievemenetID` - id of the achievement
#### Returns
* `true` if the achievement exists, `false` otherwise
***

### static `removeAchievement(Player player, achievementID)`
#### Description
* Removes the achievement from the player
#### Arguments
* **`Player`** `player` - [[Player]] instance
* `achievemenetID` - id of the achievement
#### Returns
* nothing