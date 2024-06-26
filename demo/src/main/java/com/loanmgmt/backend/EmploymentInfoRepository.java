package com.loanmgmt.backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface EmploymentInfoRepository extends MongoRepository<EmploymentInfo, ObjectId> {
  List<EmploymentInfo> findEmploymentInfoById(ObjectId id);
}
