import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  OnInit,
  Output,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as _ from 'lodash-es';
import { School } from '../school.component';
import { SchoolService } from '../school.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = [
    'id',
    'name',
    'establishmentYear',
    'availableCourses',
    'strength',
    'actions',
  ];

  dataSource: any;

  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;

  constructor(private schoolService: SchoolService) {}

  ngOnInit(): void {
    this.schoolService.getDatasource().subscribe((data) => {
      if (!_.isEmpty(data)) {
        this.dataSource = data;
      } else {
        this.schoolService.getAllSchools().subscribe((schools: School[]) => {
          this.dataSource = new MatTableDataSource<School>(schools);
          this.dataSource.paginator = this.paginator;
        });
      }
    });
  }

  delete(id: string) {
    this.schoolService.delete(id).subscribe((data) => {
      const schools = this.dataSource.filter((school: any) => school.id !== id);
      this.schoolService.setDatasource(schools);
    });
  }

  update(school: any) {
    this.schoolService.setSchool(school);
  }
}
