package com.code.JobListing.repo;

import com.code.JobListing.model.Post;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;


public interface PostRepository extends MongoRepository<Post,String> {
}
