import { Component, ChangeDetectionStrategy } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';
import { LanguageService, TranslationLoaderService } from '@app/shared/services';
import { ValidationLoader } from '@app/shared/services/validations.loader';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [TranslationLoaderService]
})
export class HomeComponent {
  availableLanguages: any = this.languageService.getAvailableLanguages();

  form = new FormGroup({});
  model: any = { language: 'en' };
  options: FormlyFormOptions = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'language',
      type: 'select',
      templateOptions: {
        change: (field) => {
          this.translate.use(field.formControl.value);
        },
        required: true,
        options: this.availableLanguages,
      }
    },
  ];

  constructor(
    private languageService: LanguageService,
    private translate: TranslateService,
    private validationsLoader: ValidationLoader,
    private translationLoader: TranslationLoaderService) {

    this.translate.use('en');
    this.translationLoader.loadTranslations();
    this.validationsLoader.init();
  }
}
