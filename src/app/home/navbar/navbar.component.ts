import { Component } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
@Component({
    selector: 'app-navbar',
    standalone: true,
    imports: [FontAwesomeModule],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
    faCoffee = faCoffee;
    faSearch = faSearch;
    ngOnInit() {}
}
