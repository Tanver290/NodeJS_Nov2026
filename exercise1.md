## Review Exercise 1 40 mins (until about 2:25)

Combine the 'URL server' and the 'file access' code to deliver the contents of a text file to a browser when the route is '/content'

This is a chance to play with code. Take this in any direction you like, and enjoy the project

There will be an opportunity to show what you've built

Ask each other, ask me, look online....

#### Architecture

It doesn't matter how you choose to structure your code, but consider maybe using named functions to encapsulate more complex code. Or use anonymous functions e.g. fpr call-backs

### Details

* Create a new module (or edit an existing one) 
* Do all the setup for an http server (import etc....)
* Add code to conditionally check for the route '/content'
* For that route, use 'fs' to read from a text file (e.g. example.txt)
* Send the contents retrieved from the file as the response to the request for '/content'
* If you like, put a small amount of HTML into a text file to be retrieved and sent as above

### Optional (if time)

* Every time there is a request to the server, write some details into a text file (like a log) e.g. what was the request URL? ('/', '/about', '/content')
* For example you could record the route of each request, and maybe additional info