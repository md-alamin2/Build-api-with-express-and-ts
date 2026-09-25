# Project Setup

## 1. Install the Required Software

Install these tools before starting the project:

- Node.js 18 or newer
- npm (included with Node.js)
- PostgreSQL 14 or newer

Check that they are installed:

```bash
node --version
npm --version
psql --version
```

## 2. Create a PostgreSQL Database

Start the PostgreSQL service, then create a database for the project:

```sql
CREATE DATABASE api_db;
```

The PostgreSQL user used by the project must be allowed to connect to this database and create tables.

## 3. Configure the Database Connection

Create a `.env` file in the project root, beside `package.json`:

```env
CONNECTION_STR=postgresql://postgres:your_password@localhost:5432/api_db
```

Update the connection string with your PostgreSQL username, password, host, port, and database name.

Do not commit `.env` to source control. Add it to `.gitignore`:

```gitignore
node_modules/
.env
```

## 4. Install Project Dependencies

Open a terminal in the project root and run:

```bash
npm install
```

## 5. Start the Project

Run the development server:

```bash
npm run dev
```

The API starts on:

```text
http://localhost:5000
```

The application creates the required database tables automatically when it starts.

## Setup Checklist

- [ ] Node.js and npm are installed
- [ ] PostgreSQL is installed and running
- [ ] The project database has been created
- [ ] The `.env` file contains a valid `CONNECTION_STR`
- [ ] `npm install` has completed successfully
- [ ] `npm run dev` starts without errors
