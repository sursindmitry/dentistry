package com.grodastr.dentistry.user.controllers;

import com.grodastr.dentistry.user.controller.UserController;
import com.grodastr.dentistry.user.dao.entity.CuredStatus;
import com.grodastr.dentistry.user.dao.entity.PaymentStatus;
import com.grodastr.dentistry.user.dto.UserDto;
import com.grodastr.dentistry.user.facade.UserFacade;
import org.junit.jupiter.api.Test;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;

import java.util.Arrays;
import java.util.List;

import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;

@WebMvcTest(UserController.class)
public class UserControllerTest {
    @Autowired
    private MockMvc mockMvc;

    @MockBean
    private UserFacade userFacade;

    @Test
    public void testGetAllUsers() throws Exception {
        System.out.println("testGetAllUsers: ");
        UserDto user1 = new UserDto(1L, "Saxe", "Hansemann", 100L, CuredStatus.CURED, PaymentStatus.PAID);
        UserDto user2 = new UserDto(2L, "Richard", "Vondruska", 738L, CuredStatus.TREATMENT, PaymentStatus.UNPAID);
        System.out.println("User1: " + user1);
        System.out.println("User2: " + user2);

        List<UserDto> userList = Arrays.asList(user1, user2);


        Mockito.when(userFacade.getAllUsers()).thenReturn(userList);

        mockMvc.perform(get("/api/v1/users")
                        .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].id").value(1))
                .andExpect(jsonPath("$[0].name").value("Saxe"))
                .andExpect(jsonPath("$[0].lastname").value("Hansemann"))
                .andExpect(jsonPath("$[0].payable").value(100))
                .andExpect(jsonPath("$[0].curedStatus").value("CURED"))
                .andExpect(jsonPath("$[0].paymentStatus").value("PAID"))

                .andExpect(jsonPath("$[1].id").value(2))
                .andExpect(jsonPath("$[1].name").value("Richard"))
                .andExpect(jsonPath("$[1].lastname").value("Vondruska"))
                .andExpect(jsonPath("$[1].payable").value(738L))
                .andExpect(jsonPath("$[1].curedStatus").value("TREATMENT"))
                .andExpect(jsonPath("$[1].paymentStatus").value("UNPAID"));
        System.out.println("User List: " + userList);
    }
}
