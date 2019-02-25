import { Component, OnInit } from '@angular/core';
import * as moment from 'moment'
import { Todo } from '../shared/todo.model';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  name: string = '';

  constructor() { }

  ngOnInit() {
  }

  onLoad() {
    console.log('onLoad');
  }

  onAdd() {
    if (!this.name) return

    const car = new Todo(
      this.name,
      moment().format('ll')
    )
  }

}
