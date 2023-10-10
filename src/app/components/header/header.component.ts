import {Component, Input} from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderItem} from "../../shared/types/header";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Input() items: HeaderItem[] = [];
}
