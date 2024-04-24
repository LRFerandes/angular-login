import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  formData = {
    email: '',
  };

  submitForm() {
    console.log('Formulário enviado!', this.formData);
    // Aqui você pode adicionar a lógica para enviar os dados para um serviço, por exemplo.
  }
}
