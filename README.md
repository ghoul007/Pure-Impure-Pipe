# PureUnpurePipe
 When writing a custom pipe in Angular you can specify whether you define a pure or an impure pipe:

```ts
@Pipe({
  name: 'filterPipe', 
  pure: false/true        <----- here (default is `true`)
})
export class FilterPipe {}
```

## Pure pipe 
input parameters value determine the output so if input parameters don’t change the output doesn’t change

## Unpure pipe 
cannot use the input value to determine if the output will change

 ## Change by property
FilterPipe didn't determine if the output will change

 ```ts
    this.users[0].name = "ghoul";
```

 ## Change by reference
Change Refernce is a solution that allow FilterPipe to determine if the output will change, for example:

 ```ts
const refUsers= Object.assign([], this.users);
// or 
const refUsers= [...this.users];
// or
const refUsers = this.users.slice()

refUsers[0].name = "ghoul";
this.users = refUsers
```
