import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {IFilter} from '../../../helpers/types/filters';

@Component({
  selector: 'app-checkbox-filter',
  templateUrl: './checkbox-filter.component.html',
  styleUrls: ['./checkbox-filter.component.scss']
})
export class CheckboxFilterComponent implements OnInit {

  @Input() showMax: number;
  @Input() filters: IFilter [];
  @Output() newValue = new EventEmitter<IFilter []>();
  constructor() { }

  ngOnInit(): void {
  }
  changeValue(): void {
    this.newValue.emit(this.filters);
  }
}
