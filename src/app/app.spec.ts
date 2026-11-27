import { TestBed } from '@angular/core/testing';
import { App } from './app';

describe('App', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [App],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(App);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should render title', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain('Les conférences à ne pas manquer');
  });

  it('should display organizers and conference organizer names', async () => {
    const fixture = TestBed.createComponent(App);
    await fixture.whenStable();
    const compiled = fixture.nativeElement as HTMLElement;

    expect(compiled.querySelector('.organizers-section h2')?.textContent).toContain('Organisateurs (4)');
    expect(compiled.querySelectorAll('.organizer-card')).toHaveLength(4);
    expect(compiled.querySelector('a[href="mailto:amira.benyoussef@example.com"]')).toBeTruthy();
    expect(compiled.textContent).toContain('Amira Ben Youssef');
    expect(compiled.textContent).toContain('Aucun organisateur');
  });
});
