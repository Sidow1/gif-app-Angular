import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'shared-lazy-image',
  templateUrl: './lazy-image.component.html',
  styleUrls: ['./lazy-image.component.css'],
})
export class LazyImageComponent implements OnInit {
  ngOnInit(): void {
    if (!this.url) throw new Error('URL property required');
  }

  @Input()
  public url!: string;

  @Input()
  public alt: string = '';

  public hadLoaded: boolean = false;

  onLoad() {
    this.hadLoaded = true;
  }
}
