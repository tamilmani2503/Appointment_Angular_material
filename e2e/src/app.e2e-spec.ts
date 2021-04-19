import { browser, logging, by , element} from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should have title', async () => {
    await page.navigateTo();
    expect(browser.getTitle()).toContain("appointment");
  });

  it('should allow the member to login', async () => {
    browser.element(by.id('userName')).sendKeys('tamil123');
    browser.element(by.id('password')).sendKeys('tamil123');
    browser.element(by.buttonText('Sign In')).click();
    browser.sleep(10000);
    expect(browser.getCurrentUrl()).toContain('member/home');
  });

  it('dashboard should have dashboard card', async () => {
    browser.sleep(10000);
    expect(browser.element(by.className('dashboard-card')).isPresent());
  });

  it('Book Appointment should take to member/appointment/add', async() =>{
    browser.element(by.css('.mat-raised-button')).click();
    browser.sleep(10000);
    expect(browser.getCurrentUrl()).toContain('member/appointment/add');
  });




  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
