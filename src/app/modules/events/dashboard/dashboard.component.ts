import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  
  events = this.store.collection('events').valueChanges({ idField: 'id' }) as Observable<Event[]>;

  constructor(private store: AngularFirestore) { }
  
  ngOnInit(): void {
    // this.store.collection('events').add({
    //   title: 'Test Event 3',
    //   description: 'Just a test event. I am only just adding this to see how this works. I need to remember to comment this out after this inital test.'
    // });
    this.events.subscribe(response => {
      console.log(response)
    })
  }

}

interface Event {
  id?: string,
  title: string,
  description: string,
  start_date?: Date,
  end_date?: Date
}
