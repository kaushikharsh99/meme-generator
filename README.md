# meme-generator

A simple, responsive, and fun web application for creating memes directly in your browser. Built with HTML5, CSS3, and modern JavaScript.


## 🚀 Features

*   **Custom Image Upload**: Upload any image from your local device to use as the base for your meme.
*   **Live Preview**: See your changes instantly as you type text or select styles.
*   **Text Customization**:
    *   Add **Top Text** and **Bottom Text**.
    *   Text is automatically capitalized for that classic meme look.
*   **Style Options**: Choose from multiple preset styles:
    *   **Classic**: Impact font with white fill and black outline.
    *   **Comic**: Comic Sans font with yellow fill.
    *   **Bold**: Arial Black font with red fill.
    *   **Funny**: Comic Sans font with lime green fill.
*   **Download**: One-click download of your generated meme as a `.png` file.
*   **Unsplash Integration (Code Ready)**: The codebase includes logic to search and fetch images from Unsplash (requires API key configuration and HTML setup).

## 🛠️ Technologies Used

*   **HTML5**: Structure of the application.
*   **CSS3**: Styling using Flexbox, CSS Grid, and modern effects like `backdrop-filter` and gradients.
*   **JavaScript (ES6+)**:
    *   **Canvas API**: Used for rendering the image and text into a single downloadable graphic.
    *   **FileReader API**: For handling local image uploads without a backend.
    *   **Fetch API**: Integrated for external image searching (Unsplash).

## 📂 Project Structure

```text
/meme-generator
├── codesnippet.html   # Main HTML file (Entry point)
├── script.js          # Application logic (Canvas drawing, Event listeners)
├── style.css          # Visual styling and responsive design
└── README.md          # Project documentation
```

## 🏁 Getting Started

### Prerequisites

You need a modern web browser (Chrome, Firefox, Edge, Safari) to run this application. No backend server or installation is required.

### Installation & Usage

1.  **Clone or Download** this repository.
2.  Open the project folder.
3.  Open `codesnippet.html` in your web browser.
4.  **Create a Meme**:
    *   Click "Choose File" to upload an image.
    *   Type your desired text in the "Top Text" and "Bottom Text" fields.
    *   Select a "Font Style" from the dropdown.
    *   Click **Generate Meme** to download your creation!

## ⚙️ Configuration (Unsplash API)

The project contains logic in `script.js` to search for images using the Unsplash API. To enable this feature:

1.  **Get an API Key**: Register as a developer at [Unsplash Developers](https://unsplash.com/developers) and create a new application to get your Access Key.
2.  **Update Logic**:
    *   Open `script.js`.
    *   Replace `const UNSPLASH_ACCESS_KEY = "YOUR_UNSPLASH_ACCESS_KEY";` with your actual key.
3.  **Update HTML**:
    *   The current `codesnippet.html` may need the search input elements added to interface with the JS. Ensure you have elements with `id="searchInput"` and `id="searchBtn"` in your HTML if you wish to use this feature.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!
1.  Fork the project.
2.  Create your feature branch (`git checkout -b feature/AmazingFeature`).
3.  Commit your changes (`git commit -m 'Add some AmazingFeature'`).
4.  Push to the branch (`git push origin feature/AmazingFeature`).
5.  Open a Pull Request.

## 📄 License

This project is open source and available for personal and educational use.
