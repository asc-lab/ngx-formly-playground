import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Call Charlotte !!!';

  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      className: 'app-lang-select',
      key: 'lang',
      type: 'select',
      templateOptions: {
        required: true,
        change: (field) => this.translate.use(field.formControl.value),
        options: [
          { label: 'pl', value: 'pl' },
          { label: 'en', value: 'en' },
        ],
      },
      expressionProperties: {
        'templateOptions.label': this.translate.stream('Global.language'),
      },
    },
  ];


  constructor(public translate: TranslateService) {
    translate.addLangs(['en', 'pl']);
    translate.setDefaultLang('en');

    translate.use('en');
    this.model.lang = translate.currentLang;
  }
}
