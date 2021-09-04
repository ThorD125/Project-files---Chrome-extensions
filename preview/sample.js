// Create one test item for each context type.
var contexts = ["page", "selection"];
for (var i = 0; i < contexts.length; i++) {
  var context = contexts[i];
  var title = "Read " + context + " text";
  var id = chrome.contextMenus.create({
    "title": title,
    "contexts": [context],
    "onclick": function (info, tab) {
      let speech = new SpeechSynthesisUtterance();
      
      speech.text = info.selectionText;
      console.log(info.selectionText);


      speech.lang = "en-US";

      speech.volume = 1;
      speech.rate = 1;
      speech.pitch = 1;

      window.speechSynthesis.speak(speech);

      speech.onstart = function(){
        console.log("start");
      };
      speech.onboundary = function(){
        console.log("boundonboundary");
      };
      speech.onend = function(){
        console.log("end");
      };
      speech.onerror = function(){
        console.log("error");
      };
      speech.onmark = function(){
        console.log("mark");
      };
      speech.onpause = function(){
        console.log("pause");
      };
      speech.onresume = function(){
        console.log("resume");
      };
      // speech.onpause = function(){
      //   window.speechSynthesis.resume(speech);
      //   console.log("next");
      // };
    }
  });
}