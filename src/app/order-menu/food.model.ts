export class Food {
    constructor(
        public name: string, 
        public price: number, 
        public imagePath: string, 
        public calories: number,
        public description: string,
        public servingSize: number) {}
}