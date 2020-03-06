import { Component } from '@angular/core';
import { User } from './User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: User[] = [
    { name: "ahmed", age: 20 },
    { name: "hamza", age: 20 },
    { name: "manel", age: 20 },
    { name: "yosra", age: 20 },
    { name: "jihed", age: 20 },
    { name: "raja", age: 20 }
  ]

  searchTerm = ''

  changeProperty() {
    this.users[0].name = "ghoul";
  }

  changeReference() {
    // const refUsers= Object.assign([], this.users);
    // const refUsers= [...this.users];
    const refUsers = this.users.slice();
    refUsers[0].name = "ghoul";
    this.users = refUsers
    console.log(this.users)
  }
}
