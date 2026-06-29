package com.code.JobListing.controller;

import com.code.JobListing.model.Post;
import com.code.JobListing.repo.PostRepository;
import com.code.JobListing.repo.SearchRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class PostController {

    @Autowired
    PostRepository repo;

    @Autowired
    SearchRepository srepo;

    @GetMapping("/")
    public String home() {
        return "redirect:/swagger-ui/index.html";
    }

    @GetMapping("/allPosts")
    public List<Post>  getAllPosts() {
        return repo.findAll();
    }

    @GetMapping("/posts/search")
    public List<Post> search(@RequestParam String keyword) {
        return srepo.findByText(keyword);
    }

    @PostMapping("/post")
    public Post addPost(@RequestBody Post post) {
        return repo.save(post);
    }


}
