import { PipeTransform, Pipe } from "@angular/core";

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(value: any, filterString: any): any {
       
        if(value === 0 || value =='' || value == null ||  filterString == null) {
            return value;
        }
        const result = [];
        for(const item of value) {
            console.log(item);
            if(item.section == null ) {

            } else {
            if(item.section.name == filterString.name) {
                result.push(item); 
                console.log("tu");
            }
        }
        }
        return result;
       
    }
}