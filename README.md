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
 - A pure pipe is only called when Angular detects a change in the value or the parameters passed to a pipe.

```ts
@Pipe({
  name: 'filterPipe', 
  pure: true     
})
export class FilterPipe {}
```

 ### Change by property

When you pass an array or object that got the content changed (but is still the same instance)

 ```ts
    this.users[0].name = "ghoul";
```
```PB```: in the case FilterPipe didn't determine if the output will change

`Solution1`: Change by reference

`Solution2`: Unpure pipe 


 ### Change by reference
Change Reference is a solution that allow FilterPipe to determine if the output will change, for example:

 ```ts
const refUsers= Object.assign([], this.users);
// or 
const refUsers= [...this.users];
// or
const refUsers = this.users.slice()

refUsers[0].name = "ghoul";
this.users = refUsers
```


## Unpure pipe 
Cannot use the input value to determine if the output will change
  - is called for every change detection cycle no matter whether the value or parameter(s) changes.


```ts
@Pipe({
  name: 'filterPipe', 
  pure: false
})
export class FilterPipe {}
```
