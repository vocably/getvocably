import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { IonicModule } from '@ionic/angular';
import { AuthModule } from '../auth/auth.module';
import { ComponentsModule } from '../components/components.module';
import { HeaderModule } from '../header/header.module';
import { AndroidTranslateComponent } from './android-translate/android-translate.component';
import { IosExtensionComponent } from './ios-extension/ios-extension.component';
import { StaticPagesRoutingModule } from './static-pages-routing.module';
import { UninstallComponent } from './uninstall/uninstall.component';
import { UserInfoPageComponent } from './user-info-page/user-info-page.component';
import { WelcomeComponent } from './welcome/welcome.component';

@NgModule({
  declarations: [
    WelcomeComponent,
    UserInfoPageComponent,
    UninstallComponent,
    IosExtensionComponent,
    AndroidTranslateComponent,
  ],
  imports: [
    CommonModule,
    StaticPagesRoutingModule,
    IonicModule,
    ComponentsModule,
    HeaderModule,
    AuthModule,
    MatIconModule,
  ],
  exports: [],
})
export class StaticPagesModule {}
