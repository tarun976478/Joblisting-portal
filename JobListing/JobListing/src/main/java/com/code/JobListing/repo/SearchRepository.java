package com.code.JobListing.repo;

import com.code.JobListing.model.Post;

import java.util.List;

public interface SearchRepository {


    public List<Post> findByText(String text);
}
