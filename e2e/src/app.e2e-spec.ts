import { browser } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
    let page: AppPage;

    beforeEach(() => {
        page = new AppPage();
    });

    it('should display welcome message', () => {
        browser.waitForAngularEnabled(false);
        page.navigateTo().then(
            () =>
                expect(page.getParagraphText()).toEqual('Welcome to angular-ngrx-mat-bootstrap-seed!')
        );
        // expect(page.getParagraphText()).toEqual('Welcome to angular-ngrx-mat-bootstrap-seed!');
    });
});
