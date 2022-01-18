import { Component, OnInit } from '@angular/core';
import { AlquranService } from '../../../services/alquran.service';
import { Surah } from '../../../Surah';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor(private alquranService: AlquranService) {}
  tasks: Surah[] = [];
  ngOnInit(): void {
    this.alquranService.getTasks().subscribe((res: any) => {
      console.log(res);
      this.tasks = res.data;
    });
  }
}
