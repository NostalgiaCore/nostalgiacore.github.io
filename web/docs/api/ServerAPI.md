# ServerAPI

## Functions
### _static_ **request**
* Args: None
* Returns **PocketMinecraftServer** instance.
```
ServerAPI::request();
```
### **addHandler**
* Args: (event, handler, priority = 5)
> **event** - *[[name of the event | Events]]*, **handler** - *Array*, **priority** - optional value, *Integer*
* Returns: None
```
addHandler("player.block.break", array($this, "handleEvent"));
addHandler("player.quit", array($this, "handleEvent"), 1);
```

### **schedule**
* Args: (delay, callback, data = array(), repeat = false, eventName = "server.schedule")
> **delay** - *Integer*, **callback** - *callable*, **data** - optional value, *Array*, **repeat** - optional value, *Boolean*, **eventName** - optional value, *[[name of the event | Events]]*
* Returns: counter of scheduled event + 1
### 
## Variables
### **queryAPI**
* contains instance of [[QueryAPI]]
### **query**
* contains instance of QueryHandler
### **console**
* contains instance of [[ConsoleAPI]]
### **level**
* contains instance of [[LevelAPI]]
### **block**
* contains instance of [[BlockAPI]]
### **chat**
* contains instance of [[ChatAPI]]
### **ban**
* contains instance of [[BanAPI]]
### **entity**
* contains instance of [[EntityAPI]]
### **time**
* contains instance of [[TimeAPI]]
### **player**
* contains instance of [[PlayerAPI]]
### **tile**
* contains instance of [[TileAPI]]
### **achievement**
* contains instance of [[AchievementAPI]]