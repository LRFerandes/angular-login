import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css']
})
export class CreateAccountComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formData = {
    name:'',
    email: '',
    password: ''
  };

  submitForm() {
    console.log('Formulário enviado!', this.formData);
    // Aqui você pode adicionar a lógica para enviar os dados para um serviço, por exemplo.
  }

}
