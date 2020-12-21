import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { ApiService, JwtService,  } from '../../../shared';
import jwtDecode from 'jwt-decode';
import { ServiceService } from '../service.service';
@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
    public pushRightClass: string;
    user: any;
    notifyBadge = false;
    notifications = [];
    constructor(private translate: TranslateService, public router: Router, private apiService: ApiService,
        private jwtService: JwtService, private service: ServiceService,
        ) {
        this.router.events.subscribe((val) => {
            if (val instanceof NavigationEnd && window.innerWidth <= 992 && this.isToggled()) {
                this.toggleSidebar();
            }
        });
    }
    playSPound() {
        const audio = <HTMLVideoElement>document.getElementById('myAudio');
        console.log(audio);
        audio.play();
    }
    showNotification() {
        const notify = new Notification('New Notification received');
    }
    ngOnInit() {
        // this.socketService.checkNow();
        this.apiService.getUserData().subscribe(res => {
            this.user = res;
        });
        this.pushRightClass = 'push-right';
      /*  const token = this.jwtService.getToken();
        if (token) {
            const decode = jwtDecode(token);
            this.getStaffBuSlug(decode.slug);
        }
        this.getNotification();*/
       
    }
    openNotification() {
        this.notifyBadge = false;
    }
    getNotification() {
        this.service.getStaffNotification().subscribe(res => {
            this.notifications = res.data;
        });
    }
    getStaffBuSlug(slug) {
        this.service.getStaffBySlug(slug).subscribe(res => {
            if (res.data) {
                this.apiService.sendUserData(res.data);
            }
        }, error => {
            this.jwtService.logoutUser();
            this.router.navigate(['/login']);
        });
    }

    isToggled(): boolean {
        const dom: Element = document.querySelector('body');
        return dom.classList.contains(this.pushRightClass);
    }

    toggleSidebar() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle(this.pushRightClass);
    }

    rltAndLtr() {
        const dom: any = document.querySelector('body');
        dom.classList.toggle('rtl');
    }

    onLoggedout() {
        this.jwtService.logoutUser();
    }

    changeLang(language: string) {
        this.translate.use(language);
    }
}
