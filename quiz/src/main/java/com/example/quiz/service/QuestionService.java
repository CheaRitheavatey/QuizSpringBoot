package com.example.quiz.service;

import com.example.quiz.entity.Question;
import com.example.quiz.repository.QuestionRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Random;

@Service
@AllArgsConstructor
public class QuestionService {
    // data field
    QuestionRepository questionRepository;

    public List<Question> getAllQuestion() {
        List<Question> all = questionRepository.findAll();
        return all;
    }

    public Question getRandomQuestion() {
        if (getAllQuestion().isEmpty()) {return null;}
        return getAllQuestion().get(new Random().nextInt(getAllQuestion().size()));
    }

    public Question addQuestion(Question question) {
        return questionRepository.save(question);
    }

    public boolean checkAnswer(Long id, String answer) {
        // find id then map to the correct answer
        return questionRepository.findById(id)
                .map(q -> q.getAnswer().equalsIgnoreCase(answer))
                .orElse(false);

    }
}
