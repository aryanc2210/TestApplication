# TestApplication API Documentation

## Overview
TestApplication is a testing API server that provides endpoints to simulate various HTTP status codes and network scenarios. This is useful for testing client-side error handling, retry logic, and network resilience features.

**Base URL:** `http://localhost:4020`

## Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation
```bash
npm install
```

### Running the Server

**Development mode:**
```bash
npm run dev
```

**Production build:**
```bash
npm run build
npm start
```

The server will start on port 4020 (or custom port via `PORT` environment variable).

---

## API Endpoints

### Root Route
```
GET /
```
**Description:** Returns a test message  
**Response Status:** 200 OK

**Response Body:**
```json
{
  "message": "Test Route"
}
```

---

All status endpoints are **POST** requests and return JSON responses with the following structure:

```json
{
  "message": "Status message",
  "status": "HTTP status code"
}
```

### 1. Success Response
```
POST /status/200
```
**Description:** Returns a successful response  
**Response Status:** 200 OK

**Response Body:**
```json
{
  "message": "SUCCESS",
  "status": "200"
}
```

---

### 2. Created Response
```
POST /status/201
```
**Description:** Returns a created response  
**Response Status:** 201 Created

**Response Body:**
```json
{
  "message": "CREATED",
  "status": "201"
}
```

---

### 3. Bad Request
```
POST /status/400
```
**Description:** Returns a bad request error  
**Response Status:** 400 Bad Request

**Response Body:**
```json
{
  "message": "BAD_REQUEST",
  "status": "400"
}
```

---

### 4. Not Found
```
POST /status/404
```
**Description:** Returns a not found error  
**Response Status:** 404 Not Found

**Response Body:**
```json
{
  "message": "RESOURCE_NOT_FOUND",
  "status": "404"
}
```

---

### 5. Unauthorized
```
POST /status/401
```
**Description:** Returns an unauthorized error  
**Response Status:** 401 Unauthorized

**Response Body:**
```json
{
  "message": "UNAUTHORIZED",
  "status": "401"
}
```

---

### 6. Forbidden
```
POST /status/403
```
**Description:** Returns a forbidden error  
**Response Status:** 403 Forbidden

**Response Body:**
```json
{
  "message": "FORBIDDEN",
  "status": "403"
}
```

---

### 7. Internal Server Error
```
POST /status/500
```
**Description:** Returns an internal server error  
**Response Status:** 500 Internal Server Error

**Response Body:**
```json
{
  "message": "INTERNAL_SERVER_ERROR",
  "status": "500"
}
```

---

### 8. Rate Limit Exceeded
```
POST /status/429
```
**Description:** Returns a rate limit exceeded error  
**Response Status:** 429 Too Many Requests

**Response Body:**
```json
{
  "message": "RATE_LIMIT_ERROR",
  "status": "429"
}
```

---

### 9. Bad Gateway
```
POST /status/502
```
**Description:** Returns a bad gateway error  
**Response Status:** 502 Bad Gateway

**Response Body:**
```json
{
  "message": "BAD_GATEWAY",
  "status": "502"
}
```

---

### 10. Service Unavailable
```
POST /status/503
```
**Description:** Returns a service unavailable error  
**Response Status:** 503 Service Unavailable

**Response Body:**
```json
{
  "message": "SERVICE_UNAVAILABLE",
  "status": "503"
}
```

---

### 11. Timeout
```
POST /status/timeout
```
**Description:** Simulates a gateway timeout  
**Response Status:** 504 Gateway Timeout

**Response Body:**
```json
{
  "message": "TIMEOUT",
  "status": "504"
}
```

---

### 12. Network Error
```
POST /status/network-error
```
**Description:** Simulates a network error  
**Response Status:** 503 Service Unavailable

**Response Body:**
```json
{
  "message": "NETWORK_ERROR",
  "status": "503"
}
```

---

### 13. Connection Refused
```
POST /status/econn-refused
```
**Description:** Simulates a connection refused error  
**Response Status:** 502 Bad Gateway

**Response Body:**
```json
{
  "message": "ECONNREFUSED",
  "status": "502"
}
```

---

### 14. DNS Not Found
```
POST /status/dns-not-found
```
**Description:** Simulates a DNS resolution failure  
**Response Status:** 404 Not Found

**Response Body:**
```json
{
  "message": "ENOTFOUND",
  "status": "404"
}
```

---

### 15. Host Unreachable
```
POST /status/host-unreachable
```
**Description:** Simulates a host unreachable error  
**Response Status:** 503 Service Unavailable

**Response Body:**
```json
{
  "message": "EHOSTUNREACH",
  "status": "503"
}
```

---

## Usage Examples

### cURL
```bash
# Root endpoint
curl http://localhost:4020/

# Success response
curl -X POST http://localhost:4020/status/200

# Error response
curl -X POST http://localhost:4020/status/404

# Rate limit
curl -X POST http://localhost:4020/status/429
```

### JavaScript/Fetch API
```javascript
// Fetch success response
fetch('http://localhost:4020/status/200')
  .then(response => response.json())
  .then(data => console.log(data));

// With error handling
fetch('http://localhost:4020/status/500')
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .catch(error => console.error('Error:', error));
```

### Axios
```javascript
import axios from 'axios';

// Test success response
axios.get('http://localhost:4020/status/200')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// Test error handling
axios.get('http://localhost:4020/status/403')
  .then(response => console.log(response.data))
  .catch(error => console.log('Expected error:', error.response.status));
```

---

## Use Cases

- **Testing Error Handlers:** Verify how your application handles different HTTP status codes
- **Testing Retry Logic:** Test exponential backoff and retry strategies
- **Testing Network Resilience:** Simulate network failures and timeouts
- **Load Testing:** Use with load testing tools to simulate various failure scenarios
- **Integration Testing:** Mock external API failures in integration tests

---

## Error Handling

The API includes global error handling middleware. If an unexpected error occurs, the following response will be returned:

```json
{
  "message": "Internal Server Error"
}
```

---

## Environment Variables

- `PORT` - Server port (default: 4020)

---

## Project Structure

```
src/
├── server.ts           # Server entry point
├── app.ts             # Express app configuration
├── config/            # Configuration files
├── controller/        # Request handlers
├── service/           # Business logic
├── routes/            # Route definitions
├── middleware/        # Express middleware
└── utils/             # Utility functions
```

---

## Technologies Used

- **Express.js** - Web framework
- **TypeScript** - Type-safe JavaScript
- **Axios** - HTTP client
- **Dockerode** - Docker API client
- **dotenv** - Environment variables

---

## License

ISC

---

## Support

For issues or questions, please check the project repository or contact the development team.
