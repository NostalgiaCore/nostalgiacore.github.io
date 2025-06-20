# ConsoleAPI

## Classes
### ConsoleLoop

## Functions

### **register**
* Args: cmd&lt;String&gt;, help&lt;String&gt;, callback&lt;Array&gt;
* Return : None
* Registers a new command
```
$this->register("help", "[page|command name]", array($this, "defaultCommands"));
$this->register("status", "", array($this, "defaultCommands"));
```

### **alias**
* Args: alias&lt;String&gt;, cmd&lt;String&gt;
* Return: True
* Adds an alias for the command
```
$this->server->api->console->alias("lag", "ping");
$this->server->api->console->alias("suicide", "kill");
```