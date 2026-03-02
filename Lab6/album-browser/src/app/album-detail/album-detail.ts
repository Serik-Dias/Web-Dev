import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AlbumService } from '../album';
import { Album } from '../models';

@Component({
  selector: 'app-album-detail',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './album-detail.html',
  styleUrl: './album-detail.css'
})
export class AlbumDetail implements OnInit {
  album: Album | undefined;

  constructor(
    private route: ActivatedRoute,
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbum(id).subscribe(data => {
      this.album = data;
    });
  }

  save() {
    if (this.album) {
      this.albumService.updateAlbum(this.album).subscribe(() => {
        alert('Изменения сохранены!');
      });
    }
  }

  goBack() {
    this.location.back();
  }
}