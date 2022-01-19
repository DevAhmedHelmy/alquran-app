import { Component, OnInit } from '@angular/core';
import { AlquranService } from '../../../services/alquran.service';
import { Surah } from '../../../Surah';
import { faEye } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  constructor(private alquranService: AlquranService) {}
  surahs: Surah[] = [];
  faTimes = faEye;

  ngOnInit(): void {
    this.alquranService.getSurahs().subscribe((res: any) => {
      this.surahs = res.data;
    });
  }
}
