---
id: error-handling
sidebar_position: 1
title: Error Handling in GoLang
sidebar_label: Error Handling
---

# **Error Handling in GoLang (Response Handler)**

This document explains the **standardized response handling** in GoLang using the `gin` framework.

---

## **📌 Overview**
To maintain **consistent API responses**, a structured response format is used.  
It provides success, error messages, and structured error handling.

---

## **📌 Response Structure**
All API responses follow a common structure:

### ✅ **Success Response Example**
```json
{
    "success": true,
    "message": "Request was successful.",
    "data": {
        "id": 1,
        "name": "Expense Tracker"
    }
}
```

### ❌ **Error Response Example**
```json
{
    "success": false,
    "message": "Invalid request.",
    "errors": {
        "email": "Email is required."
    }
}
```