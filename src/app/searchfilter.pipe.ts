import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchfilter'
})
export class SearchfilterPipe implements PipeTransform { 

  transform(datas, searchValue: string): any {
    return datas.filter(function(search){
      if(!searchValue){
        return ""
      }
      return search.title.toLowerCase().indexOf(searchValue.toLowerCase()) > -1
    })
      
  }

}
