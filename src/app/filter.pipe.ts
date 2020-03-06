import { PipeTransform, Pipe } from '@angular/core';
import { User } from './User';

// Pipe
@Pipe({
  name: 'filter',
  pure: true
})
export class FilterPipe implements PipeTransform {
  transform(users: User[], searchTerm: string): User[] {
    if (!users || !searchTerm) {
      return users;
    }
    return users.filter(user => user.name.toLowerCase()
      .indexOf(searchTerm.toLowerCase()) !== -1);
  }
}

