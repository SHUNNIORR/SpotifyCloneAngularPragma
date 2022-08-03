import { AuthService } from './../../../../services/auth.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import {UserInfoComponent}from './user-info.component'


describe('User-info tests', () => {
    let component: UserInfoComponent;
    let fixture: ComponentFixture<UserInfoComponent>;
    let compiled:HTMLElement;
    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations:[UserInfoComponent,],
            imports:[],
            providers: [ AuthService, HttpClient, HttpHandler]
        });
      });
      beforeEach(() => {
        fixture = TestBed.createComponent(UserInfoComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
        compiled = fixture.nativeElement
      })

    // test('should render my name', () => {
    //     fixture = TestBed.createComponent(UserInfoComponent);
    //     component = fixture.componentInstance;
    //     fixture.detectChanges();
    //     const compiled = fixture.nativeElement as HTMLInputElement;

    //     const pharagraph = compiled.querySelector('.userinfo__username')

    //     expect(pharagraph).toBeTruthy();
    // })
    test('Debe ser igual al snapshot', ()=>{
        expect(compiled).toMatchSnapshot();
    })
})