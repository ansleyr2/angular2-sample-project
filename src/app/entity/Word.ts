export class Word{
    wordid: '';
    word: String= '';
    meaning: String = '';
    sentence: String = '';
    constructor (word: String,meaning: String,sentence: String){
        this.word = word;
        this.meaning = meaning;
        this.sentence = sentence;
    }
    
}