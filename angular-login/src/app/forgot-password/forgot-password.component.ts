import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl,FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  meuForm!: FormGroup;

  sucesfull : boolean = false;

  private apiURL = 'http://localhost:8080/recover';

  constructor(private http: HttpClient, private router: Router,private formBuilder: FormBuilder) { 
    //this.meuForm = this.formBuilder.group({
     // email: ['', [Validators.required, Validators.email]],
      // Outros campos do formulário
   // });
  }

  ngOnInit(): void {
    this.meuForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  
  get email(){
    return this.meuForm.get('email')!
  }


  
  submitForm() {

    if(this.meuForm.invalid){
      return;
    }

    this.http.post(this.apiURL, this.meuForm.value)
      .subscribe((response) => {
        if (response === null) {
          this.router.navigateByUrl('/successful');
        }
      }, (error) => {
        console.error('Erro ao fazer solicitação:', error);
        this.sucesfull = true;
      });
  }
}
