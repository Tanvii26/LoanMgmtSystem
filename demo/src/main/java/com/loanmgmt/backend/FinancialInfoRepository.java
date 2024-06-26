package com.loanmgmt.backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface FinancialInfoRepository extends MongoRepository<FinancialInfo, ObjectId> {
  List<FinancialInfo> findFinancialInfoById(ObjectId id);
}
