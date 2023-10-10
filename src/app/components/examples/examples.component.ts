import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AssetComponent} from "../asset/asset.component";
import {BalanceComponent} from "../balance/balance.component";
import {BookComponent} from "../book/book.component";
import {CashFlowComponent} from "../cash-flow/cash-flow.component";
import {RegisterComponent} from "../register/register.component";
import {ReportComponent} from "../report/report.component";
import {SaleComponent} from "../sale/sale.component";

@Component({
  selector: 'app-examples',
  standalone: true,
  imports: [CommonModule, AssetComponent, BalanceComponent, BookComponent, CashFlowComponent, RegisterComponent, ReportComponent, SaleComponent],
  templateUrl: './examples.component.html',
  styleUrls: ['./examples.component.scss']
})
export class ExamplesComponent {

}
