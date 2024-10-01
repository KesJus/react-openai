# npx crete-react-app react-openai
# cd react-openai
# npm i cors dotenv express fs multer nodemon openai

  "dependencies": {
      "@testing-library/jest-dom": "^5.17.0",
      "@testing-library/react": "^13.4.0",
      "@testing-library/user-event": "^13.5.0",
    # added:
    "cors": "^2.8.5",
    "dotenv": "^16.4.5",
    "express": "^4.21.0",
    "fs": "^0.0.1-security",
    "multer": "^1.4.5-lts.1",
    "nodemon": "^3.1.7",
    "openai": "^4.65.0",
    "react": "^18.3.1",
    
      "react-dom": "^18.3.1",
      "react-scripts": "5.0.1",
      "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start:frontend": "react-scripts start",
    "start:backend": "nodemon server.js",
    
      "build": "react-scripts build",
    
# .env OPENAI_KEY=sk-.. from https://platform.openai.com/api-keys/
# .gitignore .env

