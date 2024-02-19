import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupsectionComponent } from './groupsection.component';

describe('GroupsectionComponent', () => {
  let component: GroupsectionComponent;
  let fixture: ComponentFixture<GroupsectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupsectionComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GroupsectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
