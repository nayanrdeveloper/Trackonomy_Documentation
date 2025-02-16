---
id: auth
sidebar_position: 2
title: Authentication API
sidebar_label: Auth API
---

### **1. Register a User**
**Endpoint:** `POST /api/auth/register`

#### **Request Body**
```json
{
    "userName": "Micheal Jackson",
    "password": "Jack@12345",
    "email": "micheal@gmail.com"
}
```

#### **Response**
```json
{
    "success": true,
    "message": "User registered successfully",
    "data": {
        "email": "micheal@gmail.com",
        "username": "Micheal Jackson"
    }
}
```

### **2. Login a user**
**Endpoint:** `POST /api/auth/login`

#### **Request Body**
```json
{
    "password": "Jack@12345",
    "email": "micheal@gmail.com"
}
```

#### **Response**
```json
{
    "success": true,
    "message": "Login successful",
    "data": {
        "token": "eyJhbGciOiJIUzI1N...tocken"
    }
}
```