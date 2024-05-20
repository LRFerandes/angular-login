import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';
import { delay } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  meuForm!: FormGroup;

  sucesfull : boolean = false;

  private apiURL = 'http://localhost:8080/login';

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    //this.meuForm = this.formBuilder.group({
      //password: ['', Validators.required],
      //email: ['', [Validators.required, Validators.email]],
      // Outros campos do formulário
    //});
  }

  ngOnInit(): void {
    this.meuForm = new FormGroup({
      password: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
    })
  }

  get email(){
    return this.meuForm.get('email')!
  }
  get password(){
    return this.meuForm.get('password')!
  }



  submitForm() {
    
    if(this.meuForm.invalid){
      return;
    }
    

    this.http.post(this.apiURL, this.meuForm.value)
      .subscribe((response) => {
        if (response !== null) {
          this.router.navigateByUrl('/successful');
        }
      }, (error) => {
        console.error('Erro ao fazer solicitação:', error);
        this.sucesfull = true;
      });

      


  }

}
