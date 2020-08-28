import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UiHeroComponent } from './ui-hero.component';

describe('UiHeroComponent', () => {
  let component: UiHeroComponent;
  let fixture: ComponentFixture<UiHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UiHeroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UiHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
