package com.loanmgmt.backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HomeLoanDataRepository extends MongoRepository<HomeLoanData, ObjectId> {
  List<HomeLoanData> findHomeLoanDataByEmail(String email);
}
