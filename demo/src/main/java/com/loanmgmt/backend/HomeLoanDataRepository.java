package com.loanmgmt.backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HomeLoanDataRepository extends MongoRepository<HomeLoanData, ObjectId> {
  List<HomeLoanData> findAllByEmail(String email);
}
