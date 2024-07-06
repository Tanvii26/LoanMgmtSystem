package com.loanmgmt.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.data.mongodb.core.mapping.DocumentReference;

@Document(collection = "PersonalLoanData")
@Data // Takes care of all getter setter methods
@AllArgsConstructor
@NoArgsConstructor
public class PersonalLoanData {

  @Id
  ObjectId id;

  String email;

  @DocumentReference
  PersonalInfo personalInfo;

  @DocumentReference
  EmploymentInfo employmentInfo;

  @DocumentReference
  FinancialInfo financialInfo;

  @DocumentReference
  PersonalLoanInfo personalLoanInfo;

  String status;
}
