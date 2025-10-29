# CampusSwap
<img width="1919" height="910" alt="Screenshot 2025-10-25 154548" src="https://github.com/user-attachments/assets/956ebce2-b58f-491f-8f6e-925384424b2d" />
<img width="1919" height="911" alt="Screenshot 2025-10-25 154600" src="https://github.com/user-attachments/assets/741b8028-651f-44ff-9c3a-ca8642eb93d1" />

🏫 CampusSwap — A Secure Marketplace for Students
CampusSwap is a full-stack web application that enables college students to exchange, sell, and list campus-related items or services in a safe and authenticated environment.

Designed with a focus on usability and trust, CampusSwap integrates Auth0 authentication, React for the frontend, and a Spring Boot REST API backend to provide a smooth, secure, and scalable experience.

💡 Core Features
🔐 Secure Authentication with Auth0
OAuth 2.0 & OIDC-based login ensures only verified campus users can access the marketplace. Tokens are validated by the backend, eliminating the need for manual user management.

🏷️ Item & Service Listings
Users can post, update, and manage listings with details like title, price, condition, and category.

💬 User-to-User Interaction
Direct messaging or contact features allow verified students to communicate safely.

🌐 Modern Frontend
Built in React, emphasizing responsive design and accessibility for both desktop and mobile users.

⚙️ Scalable Backend
Built with Spring Boot following the MVC architecture:

Controller → Maps API requests

Service → Encapsulates business logic

Repository → Handles database operations (JPA / PostgreSQL)

🧰 Tech Stack
Layer Technology Frontend React, Auth0 SDK, Tailwind CSS Backend Spring Boot (Web, JPA, Security) Database PostgreSQL (H2 for local dev) Auth Auth0 (OIDC + JWT) Architecture RESTful MVC

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
