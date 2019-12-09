# Jquery-form-generator

A simple form generator using jquery and bootstrap

---
### TO INSTALL: 

Add the script file, and add in your index.html file :
```
$(document).ready(function() {
  var myForm = $('#app').MyForm({
      
  });
});
```
---
### TO USE: 

You can add as many input you want by doing :

```
{
  'id' : 1,
  'label': 'Name',
  'type': 'text', 
  'regex': 'toto',
  'placeholder': 'Your name',
}
```

You can edit the style of the input and btn by doing : 

```
 $(document).ready(function() {
      var myApp = $('#app').MyApp({
        'css': {
				'margin': '10px',
				'color': 'green', 
				'backgroundColor': 'blue', 
				'fontSize': '10px',
				'borderRadius' : '10px',
				'btnColor': 'blue', 
				'regexColor': 'purple'
			  }
      });
    });
```

### EXEMPE:
```
$(document).ready(function() {
      var myForm = $('.app').MyForm([
		{
			'css': {
				'margin': '10px',
				'color': 'green', 
				'backgroundColor': 'blue', 
				'fontSize': '10px',
				'borderRadius' : '10px',
				'btnColor': 'blue', 
				'regexColor': 'purple'
			}
		},{
      	'id' : 1,
      	'label': 'Name',
      	'type': 'text', 
      	'regex': 'hello',
      	'placeholder': 'Your name',
      },{
      	'id' : 2,
      	'label': 'Email', 
      	'type': 'text', 
      	'regex': 'a',
      	'placeholder': 'Your email',
      },{
      	'id' : 3,
      	'label': 'Password', 
      	'type': 'password', 
      	'placeholder': 'Your password',
      },{
      	'id' : 4,
      	'label': 'Country', 
      	'type': 'select', 
      	'option': ['fance', 'belgique', 'chine'],
      	'mode' : 'no',
      	'mode': 'require'
      },{
      	'id' : 5,
      	'label': 'I agree to the conditions', 
      	'type': 'checkbox', 
      	'mode': 'require',
      }])
  });
```

More changes is comming ...
