## Persian Regex

##### a nodejs package to Regex persian Strings 
this package includes extra features to 

###### Installation

```
npm install persian-regex
```

###### Run in Codes
### es5
```
const regex=require('persian-regex');

const persianString="سلام دنیا - سلام ایران "
const Email="nima.2004hkh@gmail.com"
const Number="123456 "

console.log(regex.isPersian(persianString)); //true
console.log(regex.isPersian(Email)); //false
console.log(regex.isEmail(Number)); //false
console.log(regex.isEmail(Email)); // true
console.log(regex.isNumber(Email)); //false
```

### jsx
```
import {isPersian,isEmail,isNumber} from "persian-regex";

const persianString="سلام دنیا - سلام ایران "
const Email="nima.2004hkh@gmail.com"
const Number="123456 "

console.log(isPersian(persianString));
console.log(isEmail(Email));
console.log(isNumber(Number));
```

the result of methods , is boolean .

:heartpulse:
