abstract class nameFinder {
  abstract findnames(names: string[]): string[];

  isFourCharacters(name: string){
    return name.length == 4;
  }
}

class FourLetternameFinder extends nameFinder {
  findnames(names: string[]): string[] {
    return names.filter(name => this.isFourCharacters(name));
  }
}

let names = ['Kati', 'Toomas', 'Mart', 'Toots', 'Aleks', 'Peeter'];
let finder = new FourLetternameFinder();
let fourLetternames = finder.findnames(names);
console.log(fourLetternames);