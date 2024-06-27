package com.loanmgmt.backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface HomeLoanInfoRepository extends MongoRepository<HomeLoanInfo, ObjectId> {
  List<HomeLoanInfo> findHomeLoanInfoById(ObjectId id);
}

