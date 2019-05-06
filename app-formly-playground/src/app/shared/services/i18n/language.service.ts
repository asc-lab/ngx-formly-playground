import {Injectable} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Injectable()
export class LanguageService {

  constructor(private translate: TranslateService) {}

  getAvailableLanguages() {
    return [
        { value: 'pl', label: 'PL'  },
        { value: 'en', label: 'EN'  },
    ];
  }

  getCurrentLanguage() {
    const currentLangCode = this.translate.currentLang;
    return this.getAvailableLanguages().find(item => item.value === currentLangCode);
  }
}
