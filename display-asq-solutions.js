var genericFn = function(el){
  var sol = el.querySelector('asq-solution')
  if(! sol) return;

  try{
    el.value = sol.innerHTML
  }catch(err){
    console.log("Error displaying solution for" + el + '\n' + err.stack);
  }
}

var multiChoiceFn = function(el){
  var correctOpts = el.querySelectorAll('asq-option[correct]')
  correctOpts = [].slice.call(correctOpts, 0)
  correctOpts.forEach(function(opt){
    opt.checked = true;
  })
}

var asqHighlightFn = function(el){
  var sol = el.querySelector('asq-solution');
  if(! sol) return;

  try{
    sol = JSON.parse(sol.textContent);
    el.$$('asq-highlight-viewer-q').$.aceHighlightManager.drawSolution(sol);
  }catch(err){
    console.log("Error displaying solution for" + el + '\n' + err.stack);
  }
}

var elements = [
  'asq-sqlite-q',
  {'asq-highlight-q': asqHighlightFn},
  'asq-text-input-q', 
  {'asq-multi-choice-q':multiChoiceFn }
]

/*
* For each element of the elements array, on of the following happens:
* a) if the element is a string, then we select all DOM elements that match
* the string and apply the `genericFn` function on them.
* b) if the element is an object then it's key is used as the string to select
* DOM elements and the value is used as the function to run on each matched
* DOM element.
*/
function displayAsqSolutions(){
  for (var i = 0, l = elements.length; i < l; i++){
    try{
      var fn, elType;

      if(typeof elements[i] == 'string'){
        elType = elements[i];
        fn = genericFn;
      }else if(typeof elements[i] == 'object'){
        //check if there is custom callback

        var props =  Object.getOwnPropertyNames(elements[i]);
        if(! props.length) continue;
        var elType = props[0];
        fn = elements[i][elType]
        if(typeof fn != 'function') contine;
      }
      
      var els = document.querySelectorAll(elType);
      [].slice.call(els, 0).forEach(fn);

    }catch(err){
      console.log("Error displaying solution for" + elements[i] + ' elements \n' + err.stack);
    }
  }
}
