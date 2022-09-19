import { ChangeDetectorRef, Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'stg-du-alumni';

  navItems!: Observable<NavItem[]>;

  constructor(  private cd: ChangeDetectorRef,
                private store: AngularFirestore,
                ){}

  ngOnInit(): void {
    this.navItems = this.store.collection('navitems').valueChanges({ idField: 'id' }) as Observable<NavItem[]>;
  }

  ngAfterViewInit() {
    this.cd.detectChanges();
  }
}

export interface NavItem {
  id?: string,
  displayName: string,
  disabled?: boolean,
  published: boolean,
  iconName?: string,
  route?: string,
  children?: NavItem[]
}
