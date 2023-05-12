package com.grodastr.dentistry.user.controller;

import com.grodastr.dentistry.user.dao.entity.User;
import com.grodastr.dentistry.user.dto.UserDto;
import com.grodastr.dentistry.user.mapper.UserMapper;
import com.grodastr.dentistry.user.service.UserService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequiredArgsConstructor
@RequestMapping("api/v1/users")
public class UserController {
    private final UserService service;

    private final UserMapper mapper;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public List<UserDto> getAllUsers(){
        return service.getAllUsers().stream()
                .map(mapper::toDto)
                .collect(Collectors.toList());
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public UserDto addUser(@RequestBody UserDto userDto){
        User persistedUser = service.addUser(mapper.toEntity(userDto));
        return mapper.toDto(persistedUser);
    }
}
