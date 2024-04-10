import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class ModeService {
    public mode: string;
    
    constructor() {
        this.mode = 'dashboard';
    }

    public setMode(value: string) {
        this.mode = value;
    }
}