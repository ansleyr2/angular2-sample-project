import { Component, OnInit } from '@angular/core';
//import { FormBuilder, FormGroup, Validators } from '@angular/forms';
//import CustomValidators from '../forms/CustomValidators';
import { AppService } from '../service/service';

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css'],
  providers: [ AppService]
})
export class WordListComponent implements OnInit {
    wordList:any = [];
  constructor(private appService: AppService) {}

  ngOnInit() {
    this.fetchWords();
  }
  fetchWords(): void{
    this.appService.getWords().subscribe((data)=>{
        if(data.length > 0){
            this.wordList = data;
        }
    }, (err)=>{
        console.log("Error while fetch");
    });
  }
  
}
