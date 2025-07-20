This project is a full-stack web application that demonstrates real-time, multi-user collaboration. Moving beyond standard CRUD applications, it uses WebSockets to create a shared space where the mouse cursors of all connected users are visible and move in real-time. This project serves as a foundational exploration into the architecture of modern collaborative software like Google Docs or Figma.

----

✨ **Key Features**:

Real-Time Cursor Tracking: See the cursors of multiple users move on the screen simultaneously with low latency.

WebSocket Communication: Built on a lightweight Node.js WebSocket server for persistent, bidirectional communication between the client and server.

Dynamic UI: A responsive React frontend that efficiently renders cursor movements for all connected clients without performance degradation.

Scalable Foundation: The core architecture is designed to be easily extended with more advanced collaborative features.

---

🛠️ ***Technology Stack***

Frontend: React.js, CSS3

Backend: Node.js, Express.js

Real-Time Communication: ws (A lightweight, high-performance WebSocket library)

---

***Running the demo***

Want to run the demo and check it out? No problem!

First, download the repository with Git:
```
git clone https://github.com/sairampolisetty/live-cursor-app.git
cd live-cursor-app
```

To run the server, run:
```
cd server
npm install
npm run
```
To run the client simultaneously, open a new terminal shell, and run:
````
cd client
npm install
npm run dev
