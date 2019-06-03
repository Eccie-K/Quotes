export class Quote {
    public showDescription: Boolean;
    
     constructor (
         public id:    number,
         public  quote: string, 
         public  author:  string,
         public description: string,
         public completeDate:   Date,
         public upVote: number,
         public downVote:   number,){
             this.showDescription  =  false
         }
 }
 