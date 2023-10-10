import {Component} from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from "./components/header/header.component";
import {HeaderItem} from "./shared/types/header";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [CommonModule, RouterOutlet, NgOptimizedImage, HeaderComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
    items: HeaderItem[] = [
        {
            display: 'Home',
            path: '/home'
        },
        {
            display: 'Reports',
            path: '/reports'
        },
        {
            display: 'Examples',
            path: '/examples'
        }
    ];
}
