function ChosenWord(w) {
    this.word = w;
    this.selectedIndex = 0;
    this.wordDetails = [];

    this.addWord = function(w, d, p, s, t) {
        var wd = new WordDetail(w, d, p, s, t);
        this.wordDetails.push(wd);
    }
}

function WordDetail(w, d, p, s, t) {
    this.word = w;
    this.definition = d;
    this.partOfSpeech = p;
    this.synonyms = s || [];
    this.typeOf = t || [];
    this.imageDetail = null;
}

function ImageDetail(u) {
    this.url = u;
}