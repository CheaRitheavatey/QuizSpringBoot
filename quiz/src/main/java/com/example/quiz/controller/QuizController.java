package com.example.quiz.controller;

import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.quiz.entity.Question;
import com.example.quiz.service.QuestionService;

import lombok.AllArgsConstructor;

@RestController
@RequestMapping(path = "api/questions")
@AllArgsConstructor
public class QuizController {
    // data field
    private final QuestionService questionService;
    // method

    // GET all questions
    @GetMapping(path = "/all")
    public List<Question> getAllQuestion() {
        return questionService.getAllQuestion();
    }

    // GET random questions
    @GetMapping(path = "/random")
    public Question getRandomQuestion() {
        return questionService.getRandomQuestion();
    }

    // POST: add new question
    @PostMapping
    public Question addNewQuestion(@RequestBody Question question) {
        return questionService.addQuestion(question);
    }

    // POST: want answer
    @PostMapping(path = "/answer")
    public Map<String, Object> check(@RequestBody Map<String, String> body) {
        Long id = Long.parseLong(body.get("questionId"));
        String answer = body.get("answer");
        boolean correct = questionService.checkAnswer(id, answer);
        return Map.of("correct", correct);
    }


}
