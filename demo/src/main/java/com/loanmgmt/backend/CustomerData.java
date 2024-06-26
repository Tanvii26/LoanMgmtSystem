package com.loanmgmt.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "CustomerData")
@Data // Takes care of all getter setter methods
@AllArgsConstructor
@NoArgsConstructor
public class CustomerData {

    @Id
    ObjectId id;

    String username;

    String email;

    String password;

}
