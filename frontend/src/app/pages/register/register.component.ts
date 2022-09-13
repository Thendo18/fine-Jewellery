import { Component, OnInit, ViewChild } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MustMatch } from 'src/app/utils/validation';
import { AuthenticationService } from 'src/app/services/authentication.service';
//import Swal from 'sweetalert2';
import { Router} from '@angular/router';
import { ngxLoadingAnimationTypes } from 'ngx-loading';
import { NgxLoadingComponent } from 'ngx-loading';



@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})

export class RegisterComponent implements OnInit {
  @ViewChild('ngxLoading', { static: false })
  ngxLoadingComponent!: NgxLoadingComponent;
  showingTemplate = false;
  public ngxLoadingAnimationTypes = ngxLoadingAnimationTypes;
  public loading = false;
  
  Form = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
    confirmPassword: new FormControl(''),
  
  });
  submitted = false;
  isSuccessful = false;
  isSignUpFailed = false;
  errorMessage = '';

  constructor(private formBuilder: FormBuilder, 
    public userService : AuthenticationService, 
    private router:Router) { }

  ngOnInit(): void {
    this.loading = false;
    this.Form = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(40)]],
      confirmpassword: ['', Validators.required],
    },{
      validator:MustMatch("password","confirmpassword"),
    }

    );
  }
  get f():{ [key: string]: AbstractControl }{
    return this.Form.controls;
  }
   

  keyPressAlphanumeric(event: { keyCode: number; preventDefault: () => void; }) {

    var inp = String.fromCharCode(event.keyCode);

    if (/[a-zA-Z]/.test(inp)) {
      return true;
    } else {
      event.preventDefault();
      return false;
    }
  }

  
  onSubmit():void{
    this.loading = false;
    this.submitted = true;

    if(this.Form.invalid)
    { 
      this.loading = false;
      return
    }



    let user = {
      
      username : this.Form.value.name,
      email: this.Form.value.email,
      password : this.Form.value.password,
    }
    this.loading = true;
    // this.userService.register(user).subscribe({
    //   next:data => {
    //     this.isSuccessful = true;
    //     this.isSignUpFailed = false;
    //     this.Form.reset();
    //     this.submitted = false;
    //     this.loading = false;
    //     this.router.navigate(['/login']);
    //   },
    //   error: err => {
    //     this.loading = true;
    //     this.errorMessage = err.error.message;
    //     this.loading = false;
    //   }
    // });
  }
}
