import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesListMenuComponent } from './tables-list-menu.component';

describe('TablesListMenuComponent', () => {
  let component: TablesListMenuComponent;
  let fixture: ComponentFixture<TablesListMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TablesListMenuComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesListMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
