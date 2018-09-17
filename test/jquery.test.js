let html = null;
let pluginCode = null;


afterEach(() => {

});


beforeEach(() => {
  html = require('fs').readFileSync('src/jquery-test/jquery-plugin.html').toString();

  document.body.innerHTML = html;
  pluginCode = require('./../src/jquery-test/jquery-sample');
  

});



test('basic test that passes', () => {

  let x1 = 35 / 5;
  expect(x1).toBe(7);

});


// https://jestjs.io/docs/en/expect

test('jest has a default document', () => {

  expect(document).toBeDefined();
  expect($).toBeDefined();

});

// https://www.phpied.com/jest-jquery-testing-vanilla-app/

test('html got loaded', () => {

  expect(html).toBeDefined();
  expect(html).toEqual(expect.stringContaining('html'));

});


test('test fake document ready', () => {

   
  $('.sample').createTest();
  let items = $('.sample');
  expect(items.length).toEqual(2);

  expect($(items.get(0)).text()).toEqual('fred')

});