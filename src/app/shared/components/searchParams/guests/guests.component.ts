import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-guests',
  templateUrl: './guests.component.html',
  styleUrls: ['./guests.component.scss']
})
export class GuestsComponent implements OnInit {
  @Output() newValue = new EventEmitter<FormGroup>();
  @Output() applyBtn =  new EventEmitter();
  guestsForm: FormGroup;
  controlId = 0;
  editId = 0;
  maxAdults = 12;
  maxChildren = 4;
  adultsArray = [];
  childrenArray = [];
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.guestsForm = this.fb.group({
      rooms: this.fb.array([this.initGuests()])
    });
    for (let i = 1; i <= this.maxAdults; i++){
      this.adultsArray.push(i);
    }
    for (let i = 0; i <= this.maxChildren; i++){
      this.childrenArray.push(i);
    }
    this.onFormChange();
  }
  trackByFn(index: number, item: any): number {
    return item.trackingId;
  }
  initGuests(): FormGroup {
    return this.fb.group({
      adults: this.fb.control(1, Validators.required),
      children: this.fb.control(0),
      ages: this.fb.control(1),
      trackingId: this.generateUniqueId()
    });
  }
  addGroup(): void {
    // add address to the list
    const control = this.guestsForm.controls.rooms as FormArray;
    control.push(this.initGuests());
    this.editId = control.controls.length - 1;
    this.onFormChange();
  }
  generateUniqueId(): number {
    return this.controlId ++;
  }
  onFormChange(): void{
    this.newValue.emit(this.guestsForm.value.rooms);
  }
  onEdit(index): void{
    this.editId = index;
  }
  removeGroup(i: number): void {
    // remove address from the list
    const control = this.guestsForm.controls.rooms as FormArray;
    control.removeAt(i);
    if (i === this.editId){
      this.editId = 0;
    } else {
      if (this.editId > i){
        this.editId --;
      }
    }
    this.onFormChange();
  }
  onApply(){
    this.applyBtn.emit();
  }
  getIndexOfRoom(trackingId: number): number{
    const control = this.guestsForm.controls.rooms as FormArray;
    // tslint:disable-next-line:forin
    for (const index in control.controls) {
      const group = control.get(index) as FormGroup;
      if (group?.controls?.trackingId?.value === trackingId){
        return (+ index) as number;
      }
    }
    return 0;
  }
}
