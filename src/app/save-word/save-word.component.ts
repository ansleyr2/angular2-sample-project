import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';
import { AppService } from '../service/service';

@Component({
  selector: 'app-save-word',
  templateUrl: './save-word.component.html',
  styleUrls: ['./save-word.component.css'],
  providers: [ AppService]
})
export class SaveWordComponent implements OnInit {
  saveForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private appService: AppService) {}

  ngOnInit() {
    this.saveForm = this.formBuilder.group({
      /*name: ['', Validators.required],
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      content: ['', [Validators.required, Validators.minLength(10)]]*/

        date: [new Date(),Validators.required],
        word:['',Validators.required],
        meaning: ['',Validators.required],
        sentence:['',Validators.required]
    });
  }
  submitForm(): void {
    console.log(this.saveForm);
    if(this.saveForm.valid){
        let date = this.saveForm.value.date;

        this.appService.getWords().subscribe((data)=>{
            console.log(data);
            data.forEach((word) => console.log(word.word));
        }, (err)=>{
            console.log(err);
        });
    }else{
        console.log("Form is not valid");
    }
  }
}
