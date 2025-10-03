package com.example.backend.exception;

public class EmailAlReadyExistsException extends RuntimeException{
    public EmailAlReadyExistsException(String message) {
        super(message);
    }
}
