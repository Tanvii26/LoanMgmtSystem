package com.loanmgmt.backend;

import org.bson.types.ObjectId;
import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface PropertyLocationRespository extends MongoRepository<PropertyLocation, ObjectId> {
  List<PropertyLocation> findPropertyLocationById(ObjectId id);
}
