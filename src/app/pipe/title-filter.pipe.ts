import { HomeComponent } from './../home/home.component';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'titleFilter'
})
export class TitleFilterPipe implements PipeTransform {


  transform(value: any, filterString:string){

    if(filterString===''){
      return value;
    }

    HomeComponent.filteredArray=value.filter((data:any)=>(data.title).toLowerCase().indexOf(filterString.toLowerCase())!==-1)

    return value.filter((data:any)=>(data.title).toLowerCase().indexOf(filterString.toLowerCase())!==-1)

  }

}
