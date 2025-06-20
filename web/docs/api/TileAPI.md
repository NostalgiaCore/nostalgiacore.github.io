# TileAPI

## Functions

### **get**
* Args: (pos&lt;Position&gt;)
> pos - position of TileEntity
* Return: **&lt;Tile instance&gt;** or **false**
* Gets a TileEntity from its position

### **getByID**
* Args: (id&lt;Integer or Tile&gt;)
> id - block id or instance of TileEntity
* Return: **&lt;Tile instance&gt;**
* Gets a TileEntity instance from its id

### **getAll**
* Args: (level&lt;Level&gt;)
> level - Level instance
* Return: **Array** of tiles in level

### **add**
* Args: (level&lt;Level&gt;, class&lt;Constant Integer&gt;, x&lt;Integer&gt;, y&lt;Integer&gt;, z&lt;Integer&gt;, data&lt;Array&gt;)
> level - Level instance, class - [[Class ID of Tile]], x - posX, y - posY, z - posZ, data - entity data
* Return: **&lt;Tile instance&gt;**
* Adds new tile to the level.

### **addSign**
* Args: (level&lt;Level&gt;, x&lt;Integer&gt;, y&lt;Integer&gt;, z&lt;Integer&gt;, lines&lt;Array&gt;)
> level - Level instance, x - posX, y - posY, z - posZ, lines - data of sign

### **spawnToAll**
* Args: (tile&lt;Tile&gt;)
* Return: None
* Spawns tile for all players in the world.

### **spawnAll**
* Args: (player&lt;Player&gt;)
* Return: None
* Spawns all tiles to player

### **remove**
* Args: (id&lt;Integer&gt;)
* Return: None
* Removes a tile from world