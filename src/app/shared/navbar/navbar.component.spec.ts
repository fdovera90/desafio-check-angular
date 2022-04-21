import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLink, RouterLinkWithHref } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a link to new destination account page', () => {
    const elements = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );
    let exist = false;
    for( const elem of elements ) {
      if( elem.attributes['routerLink'] === "nuevo-destinatario"){
        exist = true;
        break;
      }
    }
    expect( exist ).toBeTruthy();
  });

  it('should have a link to transfer page', () => {
    const elements = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );
    let exist = false;
    for( const elem of elements ) {
      if( elem.attributes['routerLink'] === "transferir"){
        exist = true;
        break;
      }
    }
    expect( exist ).toBeTruthy();
  });

  it('should have a link to history page', () => {
    const elements = fixture.debugElement.queryAll( By.directive( RouterLinkWithHref ) );
    let exist = false;
    for( const elem of elements ) {
      if( elem.attributes['routerLink'] === "historial"){
        exist = true;
        break;
      }
    }
    expect( exist ).toBeTruthy();
  });

  it('should have a link to home page', () => {
    const elements = fixture.debugElement.queryAll( By.directive( RouterLink ) );
    let exist = false;
    for( const elem of elements ) {
      if( elem.attributes['routerLink'] === ""){
        exist = true;
        break;
      }
    }
    expect( exist ).toBeTruthy();
  });
});
