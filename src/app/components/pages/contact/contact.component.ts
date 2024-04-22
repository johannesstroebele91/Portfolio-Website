import {Component} from '@angular/core';
import {Meta, Title} from '@angular/platform-browser';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  emailForm: FormGroup;
  isSubmitted = false;
  isSubmitting = false;
  isSuccess = false;
  isError = false;
  errorMessage = '';

  constructor(private title: Title, private meta: Meta, private fb: FormBuilder) {
    this.title.setTitle('Contact page');
    this.meta.addTags([
      {
        name: 'author',
        content: 'Johannes Ströbele'
      },

      {
        name: 'description',
        content: 'Get in Touch if you need support developing an business application or just want to connect.'
      },
      {
        name: 'keywords',
        content: 'Johannes Ströbele, Johannes Stroebele, portfolio, contact, get in touch, email me, full stack developer,' +
          'software developer, information design' +
          'front end development, back end development, business application'
      },
    ], true);
    this.emailForm = this.fb.group({
      subject: ['', Validators.required],
      body: ['', Validators.required]
    });

  }


  onSubmit() {
    if (this.emailForm.valid) {
      this.isSubmitted = true;
      this.isSubmitting = true;
      this.isSuccess = false;
      this.isError = false;

      const value = this.emailForm.value;
      const subject = encodeURIComponent(value.subject);
      const body = encodeURIComponent(value.body);
      const emailLink = `mailto:stroebele.j@gmail.com?subject=${subject}&body=${body}`;

      setTimeout(() => {
        window.location.href = emailLink;
        this.isSubmitting = false;
      }, 1000);
    }
    this.emailForm.reset();
  }
}
