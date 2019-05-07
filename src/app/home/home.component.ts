import {Component, OnInit} from '@angular/core';
import {ConfigService} from '../config.service';


@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    public home: any;

    constructor(private config: ConfigService) {
        this.home = this.config.getConfig().home;
    }

    ngOnInit() {
    }

}
