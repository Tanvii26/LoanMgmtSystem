package com.loanmgmt.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

import java.util.Date;

@Document(collection = "PersonalInfoData")
@Data // Takes care of all getter setter methods
@AllArgsConstructor
@NoArgsConstructor
public class PersonalInfo {

    @Id
    ObjectId id;

    String fullName;
    Date dateOfBirth;
    String phone;

    String email;

    @DocumentReference
    Address address;

    String idNumber;
}
