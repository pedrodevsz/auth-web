package com.example.backend.dto;

public record LoginResponse(
        String message,
        String token
) {}
