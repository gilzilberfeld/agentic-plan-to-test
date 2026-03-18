import { Page } from '@playwright/test';

export class LoginPage {
  private page: Page;
  private usernameSelector = '[data-test="username"]';
  private passwordSelector = '[data-test="password"]';
  private loginButtonSelector = '[data-test="login-button"]';

  constructor(page: Page) {
    this.page = page;
  }

  async goto() {
    await this.page.goto('https://www.saucedemo.com');
    await this.page.waitForLoadState('networkidle');
  }

  async login(username: string, password: string) {
    await this.page.fill(this.usernameSelector, username);
    await this.page.fill(this.passwordSelector, password);
    await this.page.click(this.loginButtonSelector);
  }
}