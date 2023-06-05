package com.grodastr.dentistry.user.controllers;

import com.grodastr.dentistry.user.controller.UserController;
import com.grodastr.dentistry.user.dao.entity.CuredStatus;
import com.grodastr.dentistry.user.dao.entity.PaymentStatus;
import com.grodastr.dentistry.user.dto.UserDto;
import com.grodastr.dentistry.user.facade.UserFacade;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.mockito.Mockito.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

import com.fasterxml.jackson.databind.ObjectMapper;

@WebMvcTest(UserController.class)
public class UserControllerTest {

    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserFacade userFacade;

    private final ObjectMapper objectMapper = new ObjectMapper();

    private UserDto createUserDto() {
        return new UserDto(1L, "Dmitry", "Sursin", 100L, CuredStatus.CURED, PaymentStatus.PAID);
    }

    @Test
    public void testGetAllUsers() throws Exception {
        UserDto user1 = createUserDto();

        List<UserDto> userList = Arrays.asList(user1);

        when(userFacade.getAllUsers()).thenReturn(userList);

        mockMvc.perform(get("/api/v1/users")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].name").value("Dmitry"))
                .andExpect(jsonPath("$[0].lastname").value("Sursin"))
                .andExpect(jsonPath("$[0].payable").value(100))
                .andExpect(jsonPath("$[0].curedStatus").value("CURED"))
                .andExpect(jsonPath("$[0].paymentStatus").value("PAID"));

        verify(userFacade, times(1)).getAllUsers();
    }

    @Test
    public void testAddUser() throws Exception {
        UserDto user = createUserDto();
        UserDto createdUser = createUserDto();

        when(userFacade.addUser(any(UserDto.class))).thenReturn(createdUser);

        mockMvc.perform(post("/api/v1/users")
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Dmitry"))
                .andExpect(jsonPath("$.lastname").value("Sursin"))
                .andExpect(jsonPath("$.payable").value(100))
                .andExpect(jsonPath("$.curedStatus").value("CURED"))
                .andExpect(jsonPath("$.paymentStatus").value("PAID"));

        verify(userFacade, times(1)).addUser(user);
        UserDto savedUser = userFacade.addUser(user);
        assertEquals(createdUser, savedUser);
    }

    @Test
    public void testDeleteUser() throws Exception {
        Long userId = 1L;
        doNothing().when(userFacade).deleteUser(userId);

        mockMvc.perform(delete("/api/v1/users/{userId}", userId)
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk());

        verify(userFacade, times(1)).deleteUser(userId);
    }

    @Test
    public void testUpdateUser() throws Exception {
        Long userId = 1L;
        UserDto user = createUserDto();
        UserDto updatedUser = createUserDto();

        when(userFacade.updateUser(user, userId)).thenReturn(updatedUser);

        mockMvc.perform(put("/api/v1/users/{userId}", userId)
                        .contentType(MediaType.APPLICATION_JSON)
                        .content(objectMapper.writeValueAsString(user)))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$.id").value(1))
                .andExpect(jsonPath("$.name").value("Dmitry"))
                .andExpect(jsonPath("$.lastname").value("Sursin"))
                .andExpect(jsonPath("$.payable").value(100))
                .andExpect(jsonPath("$.curedStatus").value("CURED"))
                .andExpect(jsonPath("$.paymentStatus").value("PAID"));

        verify(userFacade, times(1)).updateUser(user, userId);
    }
}