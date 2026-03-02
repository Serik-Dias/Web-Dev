import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule, Location } from '@angular/common';
import { AlbumService } from '../album';
import { Photo } from '../models';

@Component({
  selector: 'app-album-photos',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './album-photos.html'
})
export class AlbumPhotos implements OnInit {
  photos: Photo[] = [];

  constructor(
    private route: ActivatedRoute, 
    private albumService: AlbumService,
    private location: Location
  ) {}

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.albumService.getAlbumPhotos(id).subscribe(data => this.photos = data);
  }

  goBack() {
    this.location.back(); 
  }
}