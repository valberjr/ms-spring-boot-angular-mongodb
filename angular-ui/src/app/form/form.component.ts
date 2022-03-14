import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { catchError, switchMap, tap } from 'rxjs';
import { Course } from '../course.component';
import { School } from '../school.component';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css'],
})
export class FormComponent implements OnInit {
  courses: Course[] = [
    { value: 'MATH', name: 'MATH' },
    { value: 'SCIENCE', name: 'SCIENCE' },
    { value: 'COMPUTING', name: 'COMPUTING' },
  ];

  courseForm: any;

  isDisabled: boolean = true;

  constructor(private fb: FormBuilder, private schoolService: SchoolService) {}

  ngOnInit(): void {
    this.courseForm = this.fb.group({
      id: [],
      name: [],
      establishmentYear: [],
      availableCourses: [],
      strength: [],
    });

    this.schoolService.getSchool().subscribe((school) => {
      if (school) {
        this.courseForm.get('id').setValue(school.id);
        this.courseForm.get('name').setValue(school.name);
        this.courseForm
          .get('establishmentYear')
          .setValue(school.establishmentYear);
        this.courseForm
          .get('availableCourses')
          .setValue(school.availableCourses);
        this.courseForm.get('strength').setValue(school.strength);
      }
    });
  }

  onSubmit(): void {
    this.schoolService
      .save(this.courseForm.value)
      .pipe(switchMap(() => this.schoolService.getAllSchools()))
      .subscribe((schools: School[]) => {
        this.schoolService.setDatasource(schools);
      });
  }
}
