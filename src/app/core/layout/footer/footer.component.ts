import { Component, OnInit } from '@angular/core';
import { NotificationsStoreService } from '../../../services/notifications-store.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public note = '';
  public notes$;
  public message: string;
  constructor(private notificationsStore: NotificationsStoreService) {}

  ngOnInit() {
    this.notes$ = this.notificationsStore.select$().subscribe(notificaciones =>
      notificaciones.forEach(n => {
        this.message = n.toString();
      })
    );
  }

  public send() {
    this.notificationsStore.dispatchNotification(this.note);
  }
}
