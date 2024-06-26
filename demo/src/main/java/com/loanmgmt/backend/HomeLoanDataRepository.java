package com.loanmgmt.backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface HomeLoanDataRepository extends MongoRepository<HomeLoanData, ObjectId> {

}
