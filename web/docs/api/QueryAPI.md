# QueryAPI

## Classes
### NFV - NOT_FOUND_VALUE


## Functions

### **getQueryData**
* Args: None
* Return: Array with data from query

### **addToQuery**
* Args: name&lt;String&gt;
* Return: None
* Adds entry with empty value to the query
```
$this->addToQuery("plugins");
$this->addToQuery("map");
$this->addToQuery("numplayers");
```
### **updateQueryData**
* Args: name&lt;String&gt;, value
* Return: None
* Adds new entry or modifies &lt;name&gt; entry
```
$this->updateQueryData("game_id", "MINECRAFTPE");
```