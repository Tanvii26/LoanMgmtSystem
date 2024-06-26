package com.loanmgmt.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "EmpInfoData")
@Data // Takes care of all getter setter methods
@AllArgsConstructor
@NoArgsConstructor
public class EmploymentInfo {
    @Id
    ObjectId id;

    String status;
    String employer;
    String jobTitle;
    String annualIncome;
    String duration;
}
