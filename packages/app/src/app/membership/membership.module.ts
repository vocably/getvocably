import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { ComponentsModule } from '../components/components.module';
import { HeaderModule } from '../header/header.module';
import { MembershipRoutingModule } from './membership-routing.module';
import { MembershipComponent } from './membership/membership.component';
import { IndexPageComponent } from './pages/index-page/index-page.component';

@NgModule({
  declarations: [MembershipComponent, IndexPageComponent],
  imports: [
    CommonModule,
    MembershipRoutingModule,
    HeaderModule,
    IonicModule,
    ComponentsModule,
    MatIconModule,
  ],
})
export class MembershipModule {}
