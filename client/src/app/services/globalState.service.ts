import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class GlobalStateService {
    public displayedContent: string;
    public connection: boolean;

    constructor() {
        this.displayedContent = 'controller';
        this.connection = false;
    }

    public setDisplayedContent(value: string) {
        this.displayedContent = value;
    }

    public setConnection(value: boolean) {
        this.connection = value;
    }
}
