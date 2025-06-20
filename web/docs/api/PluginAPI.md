# PluginAPI

## Classes
### interface [[Plugin]]
### interface [[OtherPluginRequirement]]
### RequiredPluginEntry
* RequiredPluginEntry - Use this as object of [[requirements array|OtherPluginRequirement]]
### DummyPlugin
* DummyPlugin - a plugin with nothing in it.

## Functions
### **getAll**
* Args: None
* Return: Array - a list of plugins on server
### **load**
* Args: file&lt;File&gt;
* Return: Boolean
* Loads a plugin from file
### **get**
* Args: $identifier&lt;Plugin&gt;
* Return: Plugin or False
* Gets a plugin
### **pluginsPath**
* Args: None
* Return: String - path to the plugins folder
### **configPath**
* Args: Plugin $plugin
* Return: String - path to the config folder for $plugin