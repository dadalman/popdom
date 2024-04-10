import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Import other shared components, directives, pipes, and services
import { HeaderComponent } from './components/header/header.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    // List your shared components, directives, and pipes here
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    IonicModule,
    // List other modules that your shared module depends on
  ],
  exports: [
    // List your shared components, directives, and pipes here to make them accessible to other modules
    HeaderComponent,
  ],
  providers: [
    // List any shared services here
  ],
})
export class SharedModule {}
