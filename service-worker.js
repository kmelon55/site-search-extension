chrome.omnibox.setDefaultSuggestion({ description: "Search on Google" });

chrome.omnibox.onInputChanged.addListener(function (text, suggest) {
  const suggestions = [
    {
      content:
        "https://search.naver.com/search.naver?query=" +
        encodeURIComponent(text),
      description: "Search on Naver",
    },
    {
      content:
        "https://www.youtube.com/results?search_query=" +
        encodeURIComponent(text),
      description: "Search on YouTube",
    },
    {
      content: "https://map.naver.com/?query=" + encodeURIComponent(text),
      description: "Search on Naver Map",
    },
  ];

  suggest(suggestions);
});

chrome.omnibox.onInputEntered.addListener(function (text) {
  const url = text.startsWith("https://")
    ? text
    : "https://www.google.com/search?q=" + encodeURIComponent(text);
  chrome.tabs.update({ url: url });
});
