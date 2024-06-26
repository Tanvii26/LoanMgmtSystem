package com.loanmgmt.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "HomeLoanInfoData")
@Data // Takes care of all getter setter methods
@AllArgsConstructor
@NoArgsConstructor
public class HomeLoanInfo {
    @Id
    ObjectId id;

    String propertyType;

    @DocumentReference
    PropertyLocation propertyLocation;

    String propertyValue;
    String loanAmount;
    String loanTenure;
    String interestRateType;

    @DocumentReference
    CoApplicant coApplicant;
}
