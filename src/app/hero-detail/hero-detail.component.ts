import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Hero } from '../hero';
import { FormsModule } from '@angular/forms';

// import { HeroesComponent } from '../heroes/heroes.component';

@Component({
  selector: 'app-hero-detail',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './hero-detail.component.html',
  styleUrl: './hero-detail.component.css'
})
export class HeroDetailComponent {
  @Input() hero?: Hero;
}
