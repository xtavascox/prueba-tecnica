import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Observable} from "rxjs";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() list: any[] = [];
  @Input() key: string = '';
  @Output('selection') selection: EventEmitter<string> = new EventEmitter<string>()
  selected = '';
  cols: any[] = []

  ngOnInit(): void {
    this.cols = Object.keys(this.list[0]).map(item => ({field: item, header: item}))
  }

  handleChange() {
    // @ts-ignore
    this.selection.emit(this.selected[this.key])
  }
}
