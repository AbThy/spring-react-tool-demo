package com.dpd.backendtool.exception;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(Exception.class)
    public ResponseEntity<String> handleExceptions(Exception ex) {
        return ResponseEntity.ok().body(ex.getMessage());
    }

    //TODO create custom exceptions and handle them separatedly
}
