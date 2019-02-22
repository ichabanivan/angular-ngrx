import { Component, OnInit, Input } from '@angular/core';
import { Todo } from '../../shared/todo.model';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() todo: Todo

}
