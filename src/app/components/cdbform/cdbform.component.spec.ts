import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CDBformComponent } from './cdbform.component';

describe('CDBformComponent', () => {
  let component: CDBformComponent;
  let fixture: ComponentFixture<CDBformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CDBformComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CDBformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
