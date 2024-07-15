import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediadetailComponent } from './mediadetail.component';

describe('MediadetailComponent', () => {
  let component: MediadetailComponent;
  let fixture: ComponentFixture<MediadetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MediadetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediadetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
