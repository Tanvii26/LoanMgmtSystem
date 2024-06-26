package com.loanmgmt.backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface HomeLoanInfoRepository extends MongoRepository<HomeLoanInfo, ObjectId> {
  List<HomeLoanInfo> findHomeLoanInfoById(ObjectId id);
}

