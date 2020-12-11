import { Component } from '@angular/core';
import { FormArray, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  title = 'task';

  data = new FormArray([
    new FormGroup({ title: new FormControl('test 1'), member: new FormControl('test 2') }),
    new FormGroup({ title: new FormControl('test title 2'), member: new FormControl('test member 2') }),
  ]);

  addItem() {
    const group = new FormGroup({
      title: new FormControl(''),
      member: new FormControl('')
    });
    this.data.push(group);
  }

  removeItem(index) {
    this.data.removeAt(index);
  }
}
