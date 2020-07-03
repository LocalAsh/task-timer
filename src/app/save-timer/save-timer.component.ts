import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-save-timer',
  templateUrl: './save-timer.component.html',
  styleUrls: ['./save-timer.component.scss']
})
export class SaveTimerComponent implements OnInit {

  createForm: FormGroup;

  constructor(public dialogRef: MatDialogRef<AppComponent>,private fb: FormBuilder) { 
  }

  ngOnInit(): void {
    this.createForm = this.fb.group({
      taskName: ['', Validators.required],
    });
  }

  save(form: FormGroup): void {
    localStorage.setItem('task_name', JSON.stringify(form.value.taskName));
    this.dialogRef.close();    
  }

  cancel(form: FormGroup): void {
    this.dialogRef.close();
  }
}
