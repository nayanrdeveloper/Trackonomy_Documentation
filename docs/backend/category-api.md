---
id: category-api
title: Category API Documentation
sidebar_label: Category API
---

# Category API Documentation

This document outlines the API endpoints for managing categories. It includes endpoints for creating (both global and user-specific), retrieving, updating, and deleting categories. All endpoints return a standardized response format with a success flag, a message, and either data or error details.

> **Note:**  
> - **Global categories** are created without authentication (userID is 0).  
> - **User categories** require authentication, and the `userID` is obtained from the request context.

---

## 1. Create Global Category

**Endpoint:** `POST /api/categories/global`

> **Description:**  
> Creates a category available for all users.  
> **Note:** No authentication is required for this endpoint.

### Request Body

```json
{
  "name": "Entertainment",
  "icon": "tv-outline"
}
```
### Successful Response
**Status Code:** `201 Created`

**Response Body:**
```json
{
  "success": true,
  "message": "Global category created successfully",
  "data": {
    "id": 5,
    "name": "Entertainment",
    "icon": "tv-outline",
    "isGlobal": true,
    "userID": 0
  }
}
```

### Error Responses

Invalid Request Payload or Validation Error:

**Status Code:** `400 Bad Request`

```json
{
  "success": false,
  "message": "Invalid category data",
  "errors": "Detailed error message here"
}
```

Internal Server Error:

**Status Code:** `500 Internal Server Error`
```json
{
  "success": false,
  "message": "Could not create global category",
  "errors": "Error details here"
}
```

## 2. Create Category

**Endpoint:** `POST /api/categories`

> **Description:**  
> Creates a new category for the authenticated user.

### Request Body

```json
{
  "name": "Groceries",
  "icon": "cart-outline"
}
```
### Successful Response
**Status Code:** `201 Created`

**Response Body:**
```json
{
  "success": true,
  "message": "Category created successfully",
  "data": {
    "id": 12,
    "name": "Groceries",
    "icon": "cart-outline",
    "userID": 8
  }
}
```

### Error Responses

Invalid Request Payload or Validation Error:

**Status Code:** `400 Bad Request`

```json
{
  "success": false,
  "message": "Invalid category data",
  "errors": "Detailed error message here"
}
```

Internal Server Error:

**Status Code:** `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Could not create category",
  "errors": "Error details here"
}
```

## 3. Get All Global Categories

**Endpoint:** `GET /api/categories/global`

> **Description:**  
> Retrieves all global categories (available to all users).

### Successful Response
**Status Code:** `200 OK`

**Response Body:**
```json
{
  "success": true,
  "message": "Global categories retrieved successfully",
  "data": [
    {
      "id": 5,
      "name": "Entertainment",
      "icon": "tv-outline",
      "isGlobal": true,
      "userID": 0
    },
    {
      "id": 6,
      "name": "Travel",
      "icon": "airplane-outline",
      "isGlobal": true,
      "userID": 0
    }
  ]
}
```

### Error Responses

Internal Server Error:

**Status Code:** `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Could not retrieve global categories",
  "errors": "Error details here"
}
```

## 4. Get All Categories

**Endpoint:** `GET /api/categories`

> **Description:**  
> Retrieves all categories for the authenticated user (including both user-specific and global categories, if applicable)

### Successful Response
**Status Code:** `200 OK`

**Response Body:**
```json
{
  "success": true,
  "message": "Categories retrieved successfully",
  "data": [
    {
      "id": 12,
      "name": "Groceries",
      "icon": "cart-outline",
      "userID": 8
    },
    {
      "id": 5,
      "name": "Entertainment",
      "icon": "tv-outline",
      "isGlobal": true,
      "userID": 0
    }
  ]
}
```

### Error Responses

Internal Server Error:

**Status Code:** `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Could not retrieve categories",
  "errors": "Error details here"
}
```

## 5. Get Category by ID

**Endpoint:** `GET /api/categories/:id`

> **Description:**  
> Retrieves a specific category by its ID for the authenticated user.

> **Path Parameter**  
> `id`: Numeric category identifier.

### Successful Response
**Status Code:** `200 OK`

**Response Body:**
```json
{
  "success": true,
  "message": "Category retrieved successfully",
  "data": {
    "id": 12,
    "name": "Groceries",
    "icon": "cart-outline",
    "userID": 8
  }
}
```

### Error Responses

Invalid Category ID Format:

**Status Code:** `400 Bad Request`

```json
{
  "success": false,
  "message": "Invalid category ID",
  "errors": "Error details here"
}
```

##### Category Not Found:

**Status Code:** `404 Not Found`

```json
{
  "success": false,
  "message": "Category not found",
  "errors": null
}
```

##### Internal Server Error:

**Status Code:** `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Failed to retrieve category",
  "errors": "Error details here"
}
```

## 6. Update Category

**Endpoint:** `PUT /api/categories/:id`

> **Description:**  
> Updates an existing category for the authenticated user.

> **Path Parameter**  
> `id`: Numeric category identifier.

### Request Body

```json
{
  "name": "Updated Groceries",
  "icon": "updated-cart-outline"
}
```
### Successful Response
**Status Code:** `200 OK`

**Response Body:**
```json
{
  "success": true,
  "message": "Category updated successfully",
  "data": {
    "id": 12,
    "name": "Updated Groceries",
    "icon": "updated-cart-outline",
    "userID": 8
  }
}
```

### Error Responses

#### Invalid Category ID or Request Payload:

**Status Code:** `400 Bad Request`

```json
{
  "success": false,
  "message": "Invalid category ID or request payload",
  "errors": "Error details here"
}
```

#### Category Not Found:

**Status Code:** `404 Not Found`
```json
{
  "success": false,
  "message": "Category not found",
  "errors": null
}
```

#### Internal Server Error:

**Status Code:** `500 Internal Server Error`
```json
{
  "success": false,
  "message": "Could not update category",
  "errors": "Error details here"
}
```

## 7. Delete Category

**Endpoint:** `DELETE /api/categories/:id`

> **Description:**  
> Deletes a category for the authenticated user.

> **Path Parameter**  
> `id`: Numeric category identifier.

### Successful Response
**Status Code:** `200 OK`

**Response Body:**
```json
{
  "success": true,
  "message": "Category deleted successfully"
}
```

### Error Responses

#### Invalid Category ID:

**Status Code:** `400 Bad Request`

```json
{
  "success": false,
  "message": "Invalid category ID",
  "errors": "Error details here"
}
```

##### Internal Server Error:

**Status Code:** `500 Internal Server Error`

```json
{
  "success": false,
  "message": "Could not delete category",
  "errors": "Error details here"
}
```

## 7. Conclusion
This documentation details the Category API endpoints with examples of request payloads, successful responses, and error responses. Use these examples as a guide for integrating or testing the Category API.