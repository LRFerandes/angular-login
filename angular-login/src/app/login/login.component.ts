import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  meuForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { 
    this.meuForm = this.formBuilder.group({
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      // Outros campos do formulário
    });
  }

  ngOnInit(): void {
  }

  private apiURL = 'http://localhost:8080/login';


  submitForm() {
    console.log('Formulário enviado!', this.meuForm);
    

    this.http.post(this.apiURL, this.meuForm.value)
      .subscribe((response) => {
        if (response !== null) {
          this.router.navigateByUrl('/successful');
        }
      }, (error) => {
        console.error('Erro ao fazer solicitação:', error);
        // Lidar com erros aqui
      });

      


  }

}
