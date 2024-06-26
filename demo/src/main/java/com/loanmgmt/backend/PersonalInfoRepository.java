package com.loanmgmt.backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PersonalInfoRepository extends MongoRepository<PersonalInfo, ObjectId> {
  List<PersonalInfo> findPersonalInfoById(ObjectId id);
}
