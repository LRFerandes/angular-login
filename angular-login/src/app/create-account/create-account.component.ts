import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {
  
  meuForm: FormGroup;

  constructor(private http: HttpClient, private formBuilder: FormBuilder) { 

    this.meuForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      userrole : 'admin',
      // Outros campos do formulário
    });

    


  }


  ngOnInit(): void {
    
  }
  private apiURL = 'http://localhost:8080/register';

  

  submitForm() {

    
    
    console.log('Formulário enviado!', this.meuForm);
    

    this.http.post(this.apiURL, this.meuForm.value)
      .subscribe((response) => {
        console.log('Resposta da API:', response);
        // Lidar com a resposta da API aqui
      }, (error) => {
        console.error('Erro ao fazer solicitação:', error);
        // Lidar com erros aqui
      });

  }

}
