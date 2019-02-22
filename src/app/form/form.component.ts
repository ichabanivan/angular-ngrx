import { Component, OnInit } from '@angular/core';
import { Todo } from '../shared/todo.model';
import moment from 'moment'
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

  onAdd() {
    if (!this.name) returnж

    const car = new Todo(
      this.name,
      moment().format()
    )
  }

}
