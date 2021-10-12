import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Student } from '../student';
import { StudentsService } from '../students.service';

interface Marker {
  student: Student;
  options: google.maps.MarkerOptions
}

@Component({
  selector: 'app-student-map',
  templateUrl: './student-map.component.html',
  styleUrls: ['./student-map.component.css']
})
export class StudentMapComponent implements OnInit {

  markers: Marker[] = [];

  mapCenter = {
    lat: -22.935142495916043,
    lng: -43.19813548085938
  }

  mapOptions: google.maps.MapOptions = {
    mapTypeId: 'roadmap',
    mapTypeControl: false,
    fullscreenControl: false,
    zoom: 13,
    maxZoom: 16,
    minZoom: 12,
    center: this.mapCenter
  }

  constructor(
    private router: Router,
    private toastr: ToastrService,
    private studentService: StudentsService) { }

  ngOnInit(): void {
    this.loadMap();
  }

  onNewStudentClick() {
    this.toastr.info("Click on map location to create a new Student", "New student information");
  }

  onMapClick(event: google.maps.MapMouseEvent) {
    this.router.navigate(['/students/new'], {
      queryParams: {
        source: "map",
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
    });
  }

  onMarkerClick(marker: Marker) {
    this.router.navigate(['/students', marker.student.id], {
      queryParams: {
        source: "map"
      }
    });
  }

  onDrag(event: google.maps.MapMouseEvent, marker: Marker) {
    this.router.navigate(['/students', marker.student.id], {
      queryParams: {
        source: "map",
        lat: event.latLng.lat(),
        lng: event.latLng.lng()
      }
    });
  }

  private loadMap() {
    this.studentService.findAll().subscribe(response => {
      response.forEach(student => {
        this.addMarker(student);
      });
    });
  }

  private addMarker(student: Student) {
    const hasLatAndLng = student.lat && student.lng;

    this.markers.push({
      student: student,
      options: {
        draggable: true,
        animation: google.maps.Animation.DROP,
        position: {
          lat: student.lat || this.mapCenter.lat,
          lng: student.lng || this.mapCenter.lng
        },
        icon: hasLatAndLng ? undefined : {
          url: "/assets/icons/map-marker-alt-solid.svg",
          scaledSize: new google.maps.Size(35, 35)
        },
        label: {
          text: student.name,
          fontSize: "18px",
          fontWeight: "bold",
          color: hasLatAndLng ? "#151515" : "#FF0000"
        }
      }
    });
  }

}
