import { useState } from "react";

const questionType = [
    {label: "Insert question", value: "insert"},
    {label: "True/False", value: "boolean"},
    {label: "QCM", value: "mcq"},
    {label: "Select All", value: "multi"},
    {label: "Fill in the blank", value: "blank"},
    {label: "Picture question", value: "picture"},

];

const quizedit = () => {
    const [questions, setQuestion] = useState([]);
    const [newQuestionType, setNewQuestionType] = useState(null);
    const [newQuestion, setNewQuestion] = useState("");

    // function
    const addQuestion = () => {
        if (!newQuestion || !newQuestion.trim()) return;
        const newEntry = {
            id: Date.now(),
            text: newQuestion,
            type: newQuestionType
        };

        setQuestion([...questions, newEntry]);
        setNewQuestion("");
        setNewQuestionType(null);
    };


    return (
        <div className="p-6">
            <div className="flex justify-between items-center mb-4">
                <h1 className="text-2xq font-semibold">Quiz Edit</h1>
            </div>
        </div>
    )
}