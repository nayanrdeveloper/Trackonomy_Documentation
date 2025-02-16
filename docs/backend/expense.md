---
id: expense-api
sidebar_position: 3
title: Expense API Documentation
sidebar_label: Expense API
---

# Expense API Documentation

This document describes the endpoints for managing expenses, including creating, retrieving, updating, and deleting expense records. The API follows a standardized response format for both successful operations and errors.

> **Note:**  
> All endpoints require the user to be authenticated. The `userID` is obtained from the request context (set via authentication middleware).

---

## 1. Create Expense

**Endpoint:** `POST /api/expenses`

### Request Body

The request body should include the following fields:

```json
{
  "title": "Lunch at Cafe",
  "description": "Lunch with colleagues",
  "amount": 1500,
  "date": "2025-03-15T12:30:00Z",
  "categoryID": 3,
  "accountID": 2,
  "fileURL": "http://example.com/receipt.jpg",
  "transactionType": "expense"
}
```

## Successful Response

**Status Code:** `201 Created`

**Response Body:**

```json
{
  "success": true,
  "message": "Expense created successfully",
  "data": {
    "id": 10,
    "title": "Lunch at Cafe",
    "description": "Lunch with colleagues",
    "amount": 1500,
    "date": "2025-03-15T12:30:00Z",
    "categoryID": 3,
    "accountID": 2,
    "fileURL": "http://example.com/receipt.jpg",
    "transactionType": "expense",
    "userID": 5
  }
}
```

## Error Responses

Invalid Request Payload or Validation Error:

**Status Code:** `400 Bad Request`

```json
{
  "success": false,
  "message": "Invalid request payload",
  "errors": "Detailed error message here"
}
```

Internal Server Error (if expense creation fails):

**Status Code:** `400 Bad Request`
```json
{
  "success": false,
  "message": "Could not create expense",
  "errors": "Error details here"
}
```

## 2. Get All Expenses

**Endpoint:** `GET /api/expenses`

Query Parameters

 - `page` (optional): Page number (default is usually 1).
 - `limit` (optional): Number of records per page.

### Successful Response
**Status Code:** `200 OK`

**Response Body:**

```json
{
  "success": true,
  "message": "Expenses retrieved successfully",
  "data": {
    "expenses": [
      {
        "id": 10,
        "title": "Lunch at Cafe",
        "description": "Lunch with colleagues",
        "amount": 1500,
        "date": "2025-03-15T12:30:00Z",
        "transactionType": "expense",
        "userID": 5,
        "categoryID": 3,
        "accountID": 2,
        "fileURL": "http://example.com/receipt.jpg"
      }
      // ... other expenses
    ],
    "total": 25,
    "current_page": 1,
    "limit": 10
  }
}
```

### Error Response
Internal Server Error (if retrieval fails):
**Status Code:** `500 Internal Server Error`

**Response Example:**

```json
{
  "success": false,
  "message": "Could not retrieve expenses",
  "errors": "Error details here"
}
```

## 3. Get Expense by ID

**Endpoint:** `GET /api/expenses/:id`

Path Parameter

 - `id` Expense identifier (numeric).

### Successful Response
**Status Code:** `200 OK`

**Response Body:**

```json
{
  "success": true,
  "message": "Expense retrieved successfully",
  "data": {
    "id": 10,
    "title": "Lunch at Cafe",
    "description": "Lunch with colleagues",
    "amount": 1500,
    "date": "2025-03-15T12:30:00Z",
    "transactionType": "expense",
    "userID": 5,
    "categoryID": 3,
    "accountID": 2,
    "fileURL": "http://example.com/receipt.jpg"
  }
}
```

### Error Response
- Invalid Expense ID Format:
   - **Status Code:** `400 Bad Request`

**Response Example:**

```json
{
  "success": false,
  "message": "Invalid expense ID",
  "errors": "Error details here"
}
```

- Expense Not Found:
   - **Status Code:** `404 Not Found`

**Response Example:**

```json
{
  "success": false,
  "message": "Expense not found",
  "errors": null
}
```

- Internal Server Error (if retrieval fails):
   - **Status Code:** `500 Internal Server Error`

**Response Example:**

```json
{
  "success": false,
  "message": "Could not retrieve expense",
  "errors": "Error details here"
}
```

## 4. Update Expense

**Endpoint:** `PUT /api/expenses/:id`

Path Parameter

 - `id` Expense identifier (numeric).

### Request Body

The request body is similar to the Create Expense endpoint. Example:

**Request  Body:**

```json
{
  "title": "Updated Lunch at Cafe",
  "description": "Lunch with colleagues and friends",
  "amount": 1600,
  "date": "2025-03-15T13:00:00Z",
  "categoryID": 3,
  "accountID": 2,
  "transactionType": "expense"
}
```

### Successful Response
- **Status Code:** `400 Bad Request`

**Response Body:**

```json
{
  "success": true,
  "message": "Expense updated successfully",
  "data": {
    "id": 10,
    "title": "Updated Lunch at Cafe",
    "description": "Lunch with colleagues and friends",
    "amount": 1600,
    "date": "2025-03-15T13:00:00Z",
    "transactionType": "expense",
    "userID": 5,
    "categoryID": 3,
    "accountID": 2,
    "fileURL": "http://example.com/receipt.jpg"
  }
}
```

### Error Response
- Invalid Expense ID or Request Payload:
   - **Status Code:** `400 Bad Request`

**Response Example:**

```json
{
  "success": false,
  "message": "Invalid expense ID or request payload",
  "errors": "Error details here"
}
```

- Expense Not Found:
   - **Status Code:** `404 Not Found`

**Response Example:**

```json
{
  "success": false,
  "message": "Expense not found",
  "errors": null
}
```

- Internal Server Error (if retrieval fails):
   - **Status Code:** `500 Internal Server Error`

**Response Example:**

```json
{
  "success": false,
  "message": "Could not retrieve expense",
  "errors": "Error details here"
}
```

## 5. Delete Expense

**Endpoint:** `DELETE /api/expenses/:id`

Path Parameter

 - `id` Expense identifier (numeric).

### Successful Response
- **Status Code:** `400 Bad Request`

**Response Body:**

```json
{
  "success": true,
  "message": "Expense deleted successfully"
}
```

### Error Response
- Invalid Expense ID:
   - **Status Code:** `400 Bad Request`

**Response Example:**

```json
{
  "success": false,
  "message": "Invalid expense ID",
  "errors": "Error details here"
}
```

- Internal Server Error (if deletion fails):
   - **Status Code:** `500 Internal Server Error`

**Response Example:**

```json
{
  "success": false,
  "message": "Could not delete expense",
  "errors": "Error details here"
}
```

## Conclusion

This documentation outlines the Expense API endpoints, including the expected structure for request payloads, successful responses, and error handling. Use these examples as a guide when integrating or testing the Expense API.