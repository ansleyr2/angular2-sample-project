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
  message:String;
  showMsg: boolean = false;
  constructor(private formBuilder: FormBuilder, private appService: AppService) {}

  ngOnInit() {
    this.showMsg = false;
    this.saveForm = this.formBuilder.group({
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

        this.appService.saveWord(this.saveForm.value).subscribe((resp)=>{
          this.showMsg = true;
          this.message = "Save Successful";
          /*this.appService.getWords().subscribe((data)=>{
            console.log(data);
            data.forEach((word) => console.log(word.word));
          }, (err)=>{
              console.log(err);
          });*/
        },(err)=>{
          this.showMsg = true;
          this.message = "Error while save";
        });
        
    }else{
        console.log("Form is not valid");
    }
  }
}
