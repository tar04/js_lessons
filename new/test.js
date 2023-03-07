function urlify(text) {
    var urlRegex = /(https?:\/\/[^\s]+)/g;

    return text.replace(urlRegex, '<a href="$1">$1</a>')
}

var html = urlify('Find me at http://www.example.com and also at http://stackoverflow.com');

console.log(html)