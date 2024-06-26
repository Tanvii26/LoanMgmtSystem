package com.loanmgmt.backend;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "FinancialInfoData")
@Data // Takes care of all getter setter methods
@AllArgsConstructor
@NoArgsConstructor
public class FinancialInfo {
    @Id
    ObjectId id;

    String monthlyIncome;
    String monthlyExpenses;
    String otherLoans;
}
