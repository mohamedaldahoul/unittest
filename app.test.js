const app = require('./app')

test("Has app function", ()=>{
  expect(app(10, 5)).toBe('A bigger than B')
})