# Screen Sharing Application

A real-time screen sharing application built with Next.js, WebRTC, and PeerJS. Create or join rooms to share your screen with others instantly.

## ✨ Features

- Real-time screen and audio sharing
- Room-based sharing system
- Cross-browser support
- Simple and intuitive interface

## 📱 Device Support

- **Hosting**: Desktop/laptop browsers only
- **Viewing**: Works on all devices (desktop, tablet, mobile)

## 🌐 Browser Support

| Browser             | Screen Sharing | Audio Sharing                |
| ------------------- | -------------- | ---------------------------- |
| **Google Chrome**   | ✅             | ✅ (Only when sharing a tab) |
| **Microsoft Edge**  | ✅             | ✅ (Only when sharing a tab) |
| **Mozilla Firefox** | ✅             | ❌                           |
| **Apple Safari**    | ✅             | ❌                           |

### Important Notes

- For audio sharing to work, users have to select the **tab option** when sharing in **Google Chrome** or **Microsoft Edge**.

## 🛠️ Built With

- [Next.js](https://nextjs.org/) - React framework
- [PeerJS](https://peerjs.com/) - WebRTC abstraction
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [shadcn/ui](https://ui.shadcn.com/) - UI components

## 🚀 Getting Started

First, clone the repository:

```bash
git clone https://github.com/tonghohin/screen-sharing.git
```

Navigate to the project directory:

```bash
cd screen-sharing
```

### Using npm

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```
