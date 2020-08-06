import { observable, action, decorate } from 'mobx'

const LANGUAGES = [
  'English',
  'German',
  'French',
  'Italian',
]

class LanguageStore {
  languages = LANGUAGES

  language = LANGUAGES[0]

  setLanguage(language) {
    this.language = language
  }
}

export default decorate(
  LanguageStore, {
    language: observable,
    setLanguage: action,
  },
)
