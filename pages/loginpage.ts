import { Locator } from '@playwright/test';
import { Page } from 'playwright';

export class LoginPage {
    private page: Page;
    private usernameInput: Locator;
    private passwordInput: Locator;

    constructor(page: Page) {
        this.page = page;
        this.usernameInput = page.locator('[data-test="username"]');
        this.passwordInput = page.locator('[data-test="password"]');
    }

    // Add your page object methods here
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.page.click('#login-button');
    }

    async getPageTitle() {
        return this.page.locator('[data-test="title"]').innerText();
    }

    async getErrorMessage() {
        return this.page.locator('[data-test="error"]').innerText();
    }

    // method to visit the login page
    async visit() {
        await this.page.goto('/');
    }
}