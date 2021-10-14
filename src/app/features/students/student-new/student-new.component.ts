import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-new',
  templateUrl: './student-new.component.html',
  styleUrls: ['./student-new.component.css']
})
export class StudentNewComponent implements OnInit {

  redirectPath = "/students";
  student: Student = new Student();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private studentService: StudentsService
  ) { }

  ngOnInit(): void {
    const { source, lat, lng } = this.activatedRoute.snapshot.queryParams;

    if (source && source === "map") {
      this.redirectPath = "/students/map";
    }

    if (lat && lng) {
      this.student.lat = parseFloat(lat);
      this.student.lng = parseFloat(lng);
    }
  }

  onSubmit() {
    this.studentService.save(this.student).subscribe(() => {
      this.router.navigateByUrl(this.redirectPath);
    });
  }

  isValid() {
    if (!this.student.name || !this.student.email || !this.student.birthday) {
      return false;
    }

    return true;
  }

}
