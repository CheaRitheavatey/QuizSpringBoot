import { useState } from 'react';
// import { Button } from "@/components/ui/button";
// import { Dialog, DialogTrigger, DialogContent } from "@/components/ui/dialog";
// import { Textarea } from "@/components/ui/textarea";
// import { Card, CardContent } from "@/components/ui/card";
// import { Plus, Pencil } from "lucide-react";
import './App.css';

function App() {
  const questionTypes = [
    { label: "Insert question", value: "insert" },
    { label: "True/False", value: "boolean" },
    { label: "QCM", value: "mcq" },
    { label: "Select All", value: "multi" },
    { label: "Fill in the blank", value: "blank" },
    { label: "Picture question", value: "picture" },
  ];

  const [questions, setQuestions] = useState([]);
  const [newQuestionType, setNewQuestionType] = useState("");
  const [newQuestion, setNewQuestion] = useState("");

  const addQuestion = () => {
    if (!newQuestion.trim() || !newQuestionType) return;

    const newEntry = {
      id: Date.now(),
      text: newQuestion,
      type: newQuestionType
    };

    setQuestions([...questions, newEntry]);
    setNewQuestion("");
    setNewQuestionType("");
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-semibold">Quiz Edit</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">
              <Plus className="mr-2 w-4 h-4" /> Add question
            </Button>
          </DialogTrigger>
          <DialogContent>
            <div className="grid grid-cols-2 gap-4">
              {questionTypes.map((type) => (
                <Button
                  key={type.value}
                  variant={
                    newQuestionType === type.value ? "default" : "outline"
                  }
                  onClick={() => setNewQuestionType(type.value)}
                >
                  {type.label}
                </Button>
              ))}
            </div>
            <Textarea
              placeholder="Type your question here..."
              value={newQuestion}
              onChange={(e) => setNewQuestion(e.target.value)}
              className="mt-4"
            />
            <Button onClick={addQuestion} className="mt-4 w-full">
              Save Question
            </Button>
          </DialogContent>
        </Dialog>
      </div>

      <div className="space-y-4">
        {questions.map((q) => (
          <Card key={q.id}>
            <CardContent className="p-4 flex justify-between items-center">
              <div>
                <p className="font-medium">{q.text}</p>
                <span className="text-sm text-gray-500">Type: {q.type}</span>
              </div>
              <Button variant="ghost">
                <Pencil className="w-4 h-4" />
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default App;
