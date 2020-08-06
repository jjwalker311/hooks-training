import { observable, action, decorate } from 'mobx'

class ThemeStore {
  theme = 'light'

  setTheme(newTheme) {
    this.theme = newTheme
  }
}

export default decorate(
  ThemeStore, {
    theme: observable,
    setTheme: action,
  },
)
