export class DinoIpsum {
  static makeCall(numOfParagraphs, numOfWords){
    return new Promise(function(resolve, reject) {
      let request = new XMLHttpRequest();
      const url = `https://dinoipsum.com/api?format=json&key1=${numOfParagraphs}&key2=${numOfWords}`;
      request.onload = function() {
        if (this.status === 200) {
          resolve(request.response);
        } else {
          reject(request.response);
        }
      }
      request.open("GET", url, true);
      request.send();
    });
  }
}