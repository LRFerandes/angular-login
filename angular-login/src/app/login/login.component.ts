import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formData = {
    email: '',
    password: ''
  };

  submitForm() {
    console.log('Formulário enviado!', this.formData);
    // Aqui você pode adicionar a lógica para enviar os dados para um serviço, por exemplo.
  }

}
