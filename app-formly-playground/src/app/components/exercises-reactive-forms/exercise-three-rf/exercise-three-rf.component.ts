import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { RequestToConcierge } from '@app/shared/model/RequestToConcierge';
import { RequestService, DictService } from '@app/shared/services';
import { DictionaryItem } from '@app/shared/model/common';

@Component({
  selector: 'app-exercise-three-rf',
  templateUrl: './exercise-three-rf.component.html',
  styleUrls: ['./exercise-three-rf.component.scss']
})
export class ExerciseThreeRfComponent implements OnInit {
  form = new FormGroup({});
  RequestToConcierge: RequestToConcierge = new RequestToConcierge();
  orderTypes: DictionaryItem[] = this.dictionaryService.getDictionaryItems('ORDER_TYPE');

  // tslint:disable-next-line:max-line-length
  acceptTerms = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt neque eu massa imperdiet, vel efficitur arcu pharetra. Sed pulvinar turpis erat, sit amet euismod dui lacinia eget. Vivamus efficitur volutpat scelerisque. Sed condimentum ipsum nec leo aliquam placerat. Ut nec eros sodales, efficitur nisi non, euismod est. ';

  constructor(
    public requestService: RequestService,
    public dictionaryService: DictService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.applyDisplayMode();
  }

  createShoppingItem(): FormGroup {
    return this.fb.group({
      order: ['', Validators.required],
      description: ['', [Validators.required, Validators.maxLength(6000)]],
      deliveryDate: [new Date(), Validators.required],
      priceRange: this.fb.group({
        from: [0, [Validators.required, Validators.min(0.1), Validators.max(999999.99)]],
        to: [9999, [Validators.required, Validators.min(0.1), Validators.max(999999.99)]],
      }),
      selectedShop: [''],
    });
  }

  applyDisplayMode() {
    this.form = this.fb.group({
      cardId: ['',  Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(5)])],
      cardToken: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(5)]],
      orderType: ['', Validators.required],
      shoppings: this.fb.array([this.createShoppingItem()]),
      comments: ['', [Validators.maxLength(6000)]],
      phoneNo: ['', [Validators.required, Validators.minLength(9), Validators.maxLength(9)]],
      email: [' ', [Validators.required, Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')]],
      acceptTerms: [false, [Validators.required, Validators.pattern('true')]]
    });
  }

  get shoppings() {
    return this.form.get('shoppings') as FormArray;
  }

  get fc() { return this.form.controls; }

  removeItem(index: number) {
    this.shoppings.removeAt(index);
  }

  addItem() {
    this.shoppings.push(this.createShoppingItem());
  }

  submit() {
    if (this.form.valid) {
      this.RequestToConcierge = this.form.value;
      this.requestService.saveRequest(this.RequestToConcierge);
    }
  }
}
