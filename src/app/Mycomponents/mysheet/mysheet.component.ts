import { Component, OnInit } from '@angular/core';
import { ClipboardService } from 'ngx-clipboard';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { MatSnackBar } from '@angular/material/snack-bar';

const copy_clipboard = `
<svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24"><path d="M22 6v16h-16v-16h16zm2-2h-20v20h20v-20zm-24 17v-21h21v2h-19v19h-2z"/></svg>`


@Component({
  selector: 'app-mysheet',
  templateUrl: './mysheet.component.html',
  styleUrls: ['./mysheet.component.css']
})
export class MysheetComponent implements OnInit {

  content = '8108493971@okbizaxis';

  constructor(private clipboardApi: ClipboardService,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private _snackBar: MatSnackBar) { 
    iconRegistry.addSvgIconLiteral('copy_clipboard', sanitizer.bypassSecurityTrustHtml(copy_clipboard));
  }

  ngOnInit(): void {
  }

  copyText() {
    this.clipboardApi.copyFromContent(this.content)
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

}
