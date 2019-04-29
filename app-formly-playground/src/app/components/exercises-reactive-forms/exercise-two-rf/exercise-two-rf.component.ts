import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { RequestToCharllote } from '@app/shared/model/RequestToCharllote';
import { RequestService, DictService } from '@app/shared/services';
import { DictionaryItem } from '@app/shared/model/common';

@Component({
  selector: 'app-exercise-two-rf',
  templateUrl: './exercise-two-rf.component.html',
  styleUrls: ['./exercise-two-rf.component.scss']
})
export class ExerciseTwoRfComponent implements OnInit {

  form = new FormGroup({});
  requestToCharllote: RequestToCharllote = new RequestToCharllote();
  orderTypes: DictionaryItem[] = this.dictionaryService.getDictionaryItems('ORDER_TYPE');

  acceptTerms: string = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tincidunt neque eu massa imperdiet, vel efficitur arcu pharetra. Sed pulvinar turpis erat, sit amet euismod dui lacinia eget. Vivamus efficitur volutpat scelerisque. Sed condimentum ipsum nec leo aliquam placerat. Ut nec eros sodales, efficitur nisi non, euismod est. '

  constructor(
    public requestService: RequestService,
    public dictionaryService: DictService,
    private fb: FormBuilder) { }

  ngOnInit() {
    this.applyDisplayMode();
  }

  applyDisplayMode() {
    this.form = this.fb.group({
      cardId: ['', Validators.required],
      cardToken: ['', Validators.required],
      deliveryDate: [new Date(), Validators.required],
      orderType: ['', Validators.required]
    });
  }

  submit() {
    if (this.form.valid) {
      this.requestService.saveRequest(this.requestToCharllote);
    }
  }

}
