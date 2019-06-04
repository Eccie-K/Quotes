export class Quote {
    
    
     constructor (
         public id:    number,
         public  quote: string, 
         public description: string,
         public  author:  string,
         public completeDate: Date,
         public upVote: number,
         public downVote: number){
             
         }
 }
 