import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

declare var require: any;

@Injectable()
export class TranslationLoaderService {

  constructor(private translate: TranslateService) {
  }

  loadTranslations(): void {
    const i18nEn = require('../../../../assets/translations/en.json');
    this.translate.setTranslation('en', i18nEn, true);
    const i18nPl = require('../../../../assets/translations/pl.json');
    this.translate.setTranslation('pl', i18nPl, true);
  }
}
