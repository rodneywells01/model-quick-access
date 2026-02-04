# Model Quick Access

A simple Chrome extension that provides quick access to major LLM web interfaces.

## Features

- Quick access to popular AI models: ChatGPT, Gemini, Claude, Perplexity, Grok
- Compact dark-themed popup with real brand SVG logos
- One-click access — opens each model's website in a new tab
- Manifest V3, no special permissions required

## Setup

### Prerequisites

- Google Chrome (or any Chromium-based browser)
- Git

### Clone the repo

```bash
git clone https://github.com/rodneywells01/model-quick-access.git
cd model-quick-access
```

### Load the extension in Chrome

1. Open Chrome and go to `chrome://extensions/`
2. Toggle **Developer mode** on (top-right corner)
3. Click **Load unpacked**
4. Select the root of this repository (the folder containing `manifest.json`)
5. The extension icon will appear in your toolbar — click it to open the popup

> **Tip:** If the icon doesn't appear, click the puzzle-piece icon in the toolbar and pin **Model Quick Access**.

### Making changes

There is no build step. Edit the source files directly and reload:

1. Make your changes to `popup.html`, `popup.css`, or any other file
2. Go back to `chrome://extensions/`
3. Click the **reload** button (circular arrow) on the Model Quick Access card
4. Click the extension icon to see your changes

## Project structure

```
├── manifest.json          # Chrome extension manifest (V3)
├── popup.html             # Popup markup
├── popup.css              # Popup styles
├── popup.js               # Popup script
└── icons/
    ├── icon16.png         # Toolbar icon
    ├── icon48.png         # Extensions page icon
    ├── icon128.png        # Chrome Web Store icon
    └── logos/             # Brand SVGs displayed in the popup
        ├── chatgpt.svg
        ├── claude.svg
        ├── gemini.svg
        ├── grok.svg
        └── perplexity.svg
```

## License

MIT 
