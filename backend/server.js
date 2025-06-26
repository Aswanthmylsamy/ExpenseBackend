// const dotenv=require('.env')
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const MONGO_URL="mongodb+srv://aswanthm:aswanthm@cluster0.smiaeo1.mongodb.net/travel?retryWrites=true&w=majority&appName=Cluster0"
const app = express();
app.use(cors());
app.use(express.json());


mongoose.connect(MONGO_URL)
.then(() => console.log('✅ MongoDB connected'))
.catch((err) => console.error('❌ MongoDB connection error:', err));


const ExpenseSchema = new mongoose.Schema({
  title: String,
  amount: Number,
  date: {
    type: Date,
    default: Date.now
  }
});

const Expense = mongoose.model('tracker', ExpenseSchema);


app.get('/expenses', async (req, res) => {
  try {
    const expenses = await Expense.find();
    res.json(expenses);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch expenses' });
  }
});

app.post('/expenses', async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    await newExpense.save();
    res.json({ message: 'Expense saved successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to save expense' });
  }
});

app.delete('/expenses/:id', async (req, res) => {
  try {
    await Expense.findByIdAndDelete(req.params.id);
    res.json({ message: 'Expense deleted successfully' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete expense' });
  }
});


app.listen(2000, () => {
  console.log('🚀 Backend running on http://localhost:2000');
});
