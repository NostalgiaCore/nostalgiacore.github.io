# PlayerAPI

## Functions
### **registerCmd**
* Args: (cmd, help = "")
> **cmd** - name of cmd, String, **help** - display in help menu, optional, String
* Returns: None
* Description: Register a command with handler from [[PlayerAPI]].

### **get**
* Args: (name, alike = true, multiple = false)
> **name** - player nickname, **alike** - optional value, **multiple** -  get more than 1 matches, optional value, String
* Returns: **[[Player]] instance** or **false**
* Description: get a player by username.

### **teleport**
* Args: (&name, &target)
> **name** - reference to a **variable** which contains **player nickname**, **target** - reference to a **variable** which contains **player nickname** or **"w:{worldname}"**
* Returns: **false** if failed

### **tppos**
* Args: (&name, &x, &y, &z)
> **name** - reference to a **variable** which contains **player nickname**, **&x**/**&y**/**&z** - reference to a variable which contains x/y/z coordinate
* Returns: **false** if failed, **true** if success

### **broadcastPacket**
* Args: (players, packet)
> **players** - **array** of players, **packet** - **RakNetDataPacket** object
* Returs: None

### **online**
* Args: None
* Returns: Array of players on server

### **getOffline**
* Args: (name)
> **name** - username of Player, String
* Returns: **Array with player data** from players/ folder

### **spawnAllPlayers**
* Args: (player)
> **player** - instance of [[Player]]
* Returns: None
* Description: Spawn **all other players** to &lt;player&gt;.

### **getAll**
* Args: (level = null)
> **level**, optional value, instance of [[Level]]
* Returns: **Array** with Players on all server or in specific world

### **getByEID**
* Args: (eid)
> **eid** - eid of player, integer
* Returns: **false** if no players were found, [[Player]] instance if player was found

### **spawnToAllPlayers**
* Args: (player)
> **player** - instance of [Player]]
* Returns: None
* Description: spawns **&lt;player&gt;** to all other players

### **remove**
* Args: (CID)
> CID - client id
* Returns: None