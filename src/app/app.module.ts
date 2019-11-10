import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { MatPaginatorModule } from '@angular/material/paginator';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { NotificationsStoreService } from './services/notifications-store.service';

@NgModule({
  declarations: [AppComponent],
  imports: [MatPaginatorModule, BrowserModule, AppRoutingModule, CoreModule, HttpClientModule, BrowserAnimationsModule],
  exports: [MatPaginatorModule],
  providers: [NotificationsStoreService],
  bootstrap: [AppComponent]
})
export class AppModule {}
