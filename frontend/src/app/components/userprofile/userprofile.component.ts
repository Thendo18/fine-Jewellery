import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-userprofile',
  templateUrl: './userprofile.component.html',
  styleUrls: ['./userprofile.component.scss']
})
export class UserprofileComponent implements OnInit {
  currentuser: Object = {}
  userProfile: any 
  profile:any
  name: any 
  email: any
  constructor(
    private actRoute: ActivatedRoute,
    private auth:AuthenticationService) {
      // let id = this.actRoute.snapshot.paramMap.get('id');
      // console.log(id);
     }

  ngOnInit(): void {
    // this.user()
  }
 
  // user(){
  //   return this.auth.getUserProfile().subscribe({next:data => {
  //     this.profile = data
  //     this.name = this.profile.decoded.name
  //     this.email = this.profile.decoded.email
  //   }})
  // }
}



