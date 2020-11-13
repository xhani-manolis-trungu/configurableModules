import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl) as Promise<unknown>;
  }

  getTitleText(): Promise<string> {
    return element(by.css('h4')).getText() as Promise<string>;
  }

  getBodyText(): Promise<string> {
    return element(by.css('body')).getText() as Promise<string>;
  }

//   // Chain 2 element calls.
// let child = element(by.css('.parent')).
// element(by.css('.child'));
// expect(child.getText()).toBe('Child text\n555-123-4567');

// // Chain 3 element calls.
// let triple = element(by.css('.parent')).
// element(by.css('.child')).
// element(by.binding('person.phone'));
// expect(triple.getText()).toBe('555-123-4567');

// // Or using the shortcut $() notation instead of element(by.css()):

// // Chain 2 element calls.
// let child = $('.parent').$('.child');
// expect(child.getText()).toBe('Child text\n555-123-4567');

// // Chain 3 element calls.
// let triple = $('.parent').$('.child').
// element(by.binding('person.phone'));
}
