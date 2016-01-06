# display-asq-solutions

## Description
Populates ASQ questions with their solutions (if specified).
 
__Important__: This is intended to be used on a clientside standalone presentation (the one to be uploaded to ASQ), __not__ on a presentation served by ASQ. Presentations that are uploaded in asq, have question solutions removed from the html and persisted on the database. This script operates on the html; it has no access to the database.

## Installation with bower
```bash
$ bower install triglian/display-asq-solutions
```

## Usage
Usage: 
Run `displayAsqSolutions()` when you want to display the solutions. 

Example:
```js
document.addEventListener('WebComponentsReady', function(){
  displayAsqSolutions();
});
```

## License 
MIT

