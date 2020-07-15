// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect'

import Enzyme from 'enzyme'

import Adapter from 'enzyme-adapter-react-16'

import toJson from 'enzyme-to-json'

import registerRequireContextHook from 'babel-plugin-require-context-hook/register'

registerRequireContextHook()

Enzyme.configure({ adapter: new Adapter() })

global.mount = Enzyme.mount
global.shallow = Enzyme.shallow
global.render = Enzyme.render
global.snapshot = toJson
global.window.matchMedia = () => ({ matches: () => {} }) // required for lib-web-analytics
