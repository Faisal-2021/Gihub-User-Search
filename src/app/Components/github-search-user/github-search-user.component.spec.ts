import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubSearchUserComponent } from './github-search-user.component';

describe('GithubSearchUserComponent', () => {
  let component: GithubSearchUserComponent;
  let fixture: ComponentFixture<GithubSearchUserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubSearchUserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubSearchUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
