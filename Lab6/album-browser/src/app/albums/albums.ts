import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { AlbumService } from '../album';
import { Album } from '../models';

@Component({
  selector: 'app-albums',
  standalone: true,
  imports: [CommonModule, RouterModule, FormsModule],
  templateUrl: './albums.html',
  styleUrl: './albums.css'
})
export class Albums implements OnInit {
  albums: Album[] = [];
  newAlbumTitle: string = '';

  constructor(private albumService: AlbumService) {}

  ngOnInit() {
    this.albumService.getAlbums().subscribe(data => {
      this.albums = data;
    });
  }

  addAlbum() {
    if (!this.newAlbumTitle.trim()) return;

    const newAlbum = {
      title: this.newAlbumTitle,
      userId: 1
    } as Album;

    this.albumService.createAlbum(newAlbum).subscribe((album: Album) => {
      this.albums.unshift(album);
      this.newAlbumTitle = '';
    });
  }

  deleteAlbum(id: number) {
    this.albums = this.albums.filter(a => a.id !== id);
    this.albumService.deleteAlbum(id).subscribe();
  }
}