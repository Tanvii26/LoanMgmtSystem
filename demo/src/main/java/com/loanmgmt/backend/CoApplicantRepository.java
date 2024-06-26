package com.loanmgmt.backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface CoApplicantRepository extends MongoRepository<CoApplicant, ObjectId> {
  List<CoApplicant> findCoApplicantById(ObjectId id);
}
