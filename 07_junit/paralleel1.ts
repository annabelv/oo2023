abstract class AbstractResistor{
   constructor(public name: string){}
   abstract draw(g, startx: number, y: number):void; 
   abstract getWidth(): number;
   abstract getHeight(): number;
}

class Resistor extends AbstractResistor{
   constructor(name: string){
    super(name);
   }
   draw(g, startx: number, y: number): void{
    g.beginPath();
    g.moveTo(startx, y);
    g.lineTo(startx+this.getWidth()/4, y);
    g.rect(startx+this.getWidth()/4, y-10, this.getWidth()/2, 20);
    g.fillText(this.name, startx+this.getWidth()/4+1, y+2);
    g.moveTo(startx+this.getWidth()*3/4, y);
    g.lineTo(startx+this.getWidth(), y);
    g.stroke();

   }
   getWidth():number{return 50;}
   getHeight():number{return 30;}
}

class ParallelConnection extends AbstractResistor{
    protected resistors:AbstractResistor[]=[];
	protected additionalHeight:number=10;
    constructor(name: string){
        super(name);
    }
    addResistor(r: AbstractResistor): void{
       this.resistors.push(r);
    }
    getWidth(): number {
		return Math.max(...this.resistors.map(r => r.getWidth()))+20;
    }
    getHeight(): number{
		let sum=0;
		for(let resistor of this.resistors){
			sum+=resistor.getHeight();
		}
        return sum+this.resistors.length+this.additionalHeight+20;
    }
    draw(g, startx: number, y: number){
        let x=startx;
        g.beginPath();
        g.moveTo(x, y);
        x+=10;
        g.lineTo(x, y);
        g.stroke()
        let areaStartX=x-5;
		let areaStartY=y-this.getHeight()/2;
		let lineStartY=-1;
		let lineEndY=-1
        for(let i=0; i<this.resistors.length; i++){
          this.resistors[i].draw(g, x, areaStartY+this.resistors[i].getHeight()/2);
		  if(i==0){lineStartY=areaStartY+this.resistors[i].getHeight()/2}
			if(i==this.resistors.length-1){lineEndY=areaStartY+this.resistors[i].getHeight()/2}
          areaStartY+=this.resistors[i].getHeight()+this.additionalHeight;
        }
		g.beginPath();
		g.moveTo(x, lineStartY);
		g.lineTo(x, lineEndY);
		g.moveTo(x+this.getWidth()-20, lineStartY);
		g.lineTo(x+this.getWidth()-20, lineEndY);
		g.stroke();
        g.strokeStyle="lightgray";
        g.beginPath();
        g.rect(areaStartX, y-this.getHeight()/2, this.getWidth()-10, this.getHeight());
        g.stroke();
		x+=this.getWidth()-20;
        g.strokeStyle="black";
        g.beginPath();
        g.moveTo(x, y);
        x+=10;
        g.lineTo(x, y);
        g.stroke()
        g.fillText(this.name, startx+this.getWidth()/2-10, y+this.getHeight()/2);
     }
}