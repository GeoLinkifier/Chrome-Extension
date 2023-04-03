class TrieNode {
  constructor() {
    this.children = new Map();
    this.isEndOfWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode();
  }

  insert(word) {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) {
        current.children.set(char, new TrieNode());
      }
      current = current.children.get(char);
    }
    current.isEndOfWord = true;
  }

  search(word) {
    let current = this.root;
    for (const char of word) {
      if (!current.children.has(char)) {
        return false;
      }
      current = current.children.get(char);
    }
    return current.isEndOfWord;
  }
}

const trie = new Trie();
cityDataset.forEach(city => trie.insert(city.city));

function linkifyCities(textNode) {
  const text = textNode.textContent;
  const words = text.match(/\b\w[\w']*(?:\s+\w[\w']*)?\b/g) || [];

  const newText = words.reduce((acc, word) => {
    const trimmedWord = word.trim();

    if (trie.search(trimmedWord) || (trimmedWord.includes(' ') && trie.search(trimmedWord.replace(' ', '')))) {
      return acc.replace(
        word,
        `<a href="https://earth.google.com/web/search/${encodeURIComponent(trimmedWord)}" target="_blank">${word}</a>`
      );
    }
    return acc;
  }, text);

  if (newText !== textNode.textContent) {
    const wrapper = document.createElement('span');
    wrapper.innerHTML = newText;
    textNode.parentNode.replaceChild(wrapper, textNode);
  }
}

function walkNodeTree(node, callback) {
  if (node.nodeType === Node.TEXT_NODE) {
    callback(node);
  } else {
    node.childNodes.forEach(childNode => walkNodeTree(childNode, callback));
  }
}

function processPage() {
  const textElements = ['P', 'H1', 'H2', 'H3', 'H4', 'H5', 'H6', 'LI'];
  textElements.forEach(tag => {
    document.querySelectorAll(tag).forEach(element => {
      walkNodeTree(element, linkifyCities);
    });
  });
}

processPage();
