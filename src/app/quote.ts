export class Quote {
   showDescription: Boolean;
    constructor (
        public  id: number, 
        public name:    string,
        public author:  string,
        public date:    Date,
        public upvotes: number,
        public downvotes:   number, 

       ){
           this.showDescription  =  false;
       }
}
