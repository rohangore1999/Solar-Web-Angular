import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import datas from '../../db.json'


@Component({
  selector: 'app-filter-sheet',
  templateUrl: './filter-sheet.component.html',
  styleUrls: ['./filter-sheet.component.css']
})
export class FilterSheetComponent implements OnInit {
  datas: [] = datas;
  searchValue: string;

  
  constructor(private bottomSheet: MatBottomSheet) { }

  ngOnInit(): void {
  }

  closeTemplateSheetMenu() {
    this.bottomSheet.dismiss();
  }

}
