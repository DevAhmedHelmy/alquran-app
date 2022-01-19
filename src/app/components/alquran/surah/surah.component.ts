import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { AlquranService } from '../../../services/alquran.service';
import { Surah } from '../../../Surah';
@Component({
  selector: 'app-surah',
  templateUrl: './surah.component.html',
  styleUrls: ['./surah.component.css'],
})
export class SurahComponent implements OnInit {
  id!: any;
  surah!: Surah;
  constructor(
    private alquranService: AlquranService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.getSurah();
  }

  getSurah() {
    this.route.paramMap.subscribe((res) => {
      this.id = res.get('id');
    });
    this.alquranService.getSurah(this.id).subscribe((res: any) => {
      this.surah = res.data;
    });
  }
}
