# admin_mpd

An admin panel application built with Node.js and Express.

## Getting Started

### Prerequisites

- Node.js >= 18
- npm >= 8

### Installation

```bash
npm install
```

### Configuration

Copy the example environment file and update the values:

```bash
cp .env.example .env
```

### Running the Application

**Development:**
```bash
npm run dev
```

**Production:**
```bash
npm start
```

The application will be available at `http://localhost:3000`.

### Running Tests

```bash
npm test
```

## Project Structure

```
admin_mpd/
├── public/          # Static assets (CSS, JS)
├── src/
│   ├── routes/      # Express route handlers
│   ├── app.js       # Express app setup
│   └── server.js    # HTTP server entry point
├── tests/           # Test files
├── views/           # EJS templates
└── package.json
```