package com.loanmgmt.backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface PersonalLoanInfoRepository extends MongoRepository<PersonalLoanInfo, ObjectId> {
  List<PersonalLoanInfo> findPersonalLoanInfoById(ObjectId id);
}
