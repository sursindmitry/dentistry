package com.grodastr.dentistry.user.dto;

import com.grodastr.dentistry.user.dao.entity.CuredStatus;
import com.grodastr.dentistry.user.dao.entity.PaymentStatus;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserDto {
    private Long id;
    private String name;
    private String lastname;
    private Long payable;
    private CuredStatus curedStatus;
    private PaymentStatus paymentStatus;
}
