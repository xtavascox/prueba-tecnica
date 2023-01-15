import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {debounceTime, Subject} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {


  @Output() onDebounce: EventEmitter<string> = new EventEmitter();
  @Output() onClear: EventEmitter<boolean> = new EventEmitter()
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit() {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        this.onDebounce.emit(valor);
      });
  }

  handleClear() {
    this.onClear.emit(true)
    this.termino = ''
  }

  teclaPresionada() {
    this.debouncer.next(this.termino);
  }
}
